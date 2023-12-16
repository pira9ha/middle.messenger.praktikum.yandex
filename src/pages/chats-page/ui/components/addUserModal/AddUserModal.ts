import Handlebars from 'handlebars';
import s from './addUserModal.module.scss';
import addUserModal from './addUserModal.template.ts';
import Component from '@/shared/lib/component/Component.ts';
import {
  AddUserFormChildren,
  AddUserFormProps,
} from '@/pages/chats-page/lib/types/chat.ts';
import { IComponentProps } from '@/shared/lib/component/componentTypes.ts';
import { InputField } from '@/shared/ui/inputField';
import { debounce } from '@/shared/lib/utils/debounce.ts';
import userService from '@/service/UserService.ts';
import { Button } from '@/shared/ui/button';
import store from '@/shared/lib/store/Store.ts';
import chatsService from '@/service/ChatsService.ts';
import modalsController from '@/shared/lib/ModalsController/ModalsController.ts';

export class AddUserModal extends Component<
  AddUserFormProps,
  AddUserFormChildren
> {
  constructor() {
    const handleSearch = debounce(async (target: HTMLInputElement) => {
      const users = await userService.searchUsersByLogin({
        login: target.value,
      });

      if (users) {
        this.setProps({ searchedUsers: users });
      }
      target.focus();
    });

    const componentProps: IComponentProps<
      AddUserFormProps,
      AddUserFormChildren
    > = {
      props: {
        searchedUsers: [],
        selectedUsers: [],
        className: s.addUserForm,
        events: {
          click: (event: MouseEvent | Event) => {
            const { target } = event;

            if (target instanceof HTMLLIElement) {
              const selected = target.getAttribute('data-user-id');
              const selectedUser = this.props.searchedUsers.find(
                (user) => user.id === Number(selected),
              );

              if (selectedUser) {
                this.setProps({
                  selectedUsers: [...this.props.selectedUsers, selectedUser],
                });
              }
            }

            if (target instanceof HTMLSpanElement) {
              const selected = target.getAttribute('data-user-id');
              const selectedUsers = this.props.selectedUsers.filter(
                (user) => user.id !== Number(selected),
              );
              this.setProps({ selectedUsers });
            }
          },
        },
      },
      children: {
        loginSearch: new InputField({
          input: {
            name: 'login',
          },
          label: {
            labelText: 'Логин',
            for: 'login',
          },
          events: {
            input: (event: InputEvent | Event) => {
              const { target } = event;

              if (target instanceof HTMLInputElement) {
                if (!target.value) {
                  this.setProps({ searchedUsers: [] });
                  target.focus();
                } else {
                  handleSearch(target);
                }
              }
            },
          },
        }),
        sendButton: new Button({
          title: 'Добавить',
          customClass: s.sendButton,
          onClick: async () => {
            const state = store.getState();

            if (state?.activeChat && this.props.selectedUsers) {
              const users = this.props.selectedUsers.map((user) =>
                Number(user.id),
              );
              const addUserRes = await chatsService.addUserInChat(
                users,
                state?.activeChat,
              );

              if (addUserRes) {
                modalsController.closeModal();
              }
            }
          },
        }),
      },
    };

    super('form', componentProps);
  }

  render() {
    const template = Handlebars.compile(addUserModal);
    return this.compile(template);
  }
}
