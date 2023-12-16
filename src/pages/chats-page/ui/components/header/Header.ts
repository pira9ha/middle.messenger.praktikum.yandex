import Handlebars from 'handlebars';
import Component from '@/shared/lib/component/Component.ts';
import s from './header.module.scss';
import header from './header.template.ts';
import { ChatAvatar } from '@/shared/ui/chatAvatar';
import { HeaderProps, THeaderChildren } from '../../../lib/types/chat.ts';
import { Dropdown } from '@/shared/ui/dropdown';
import { crossIcon, errorCrossIcon, menuIcon, plusIcon } from '@/shared/svg';
import { ButtonVariant } from '@/shared/ui/button';
import { DropdownMenuPlace } from '@/shared/ui/dropdown/lib/types/dropdown.ts';
import { connect } from '@/shared/lib/store/connect.ts';
import { State } from '@/shared/lib/store/types.ts';
import { activeChatProps } from '../../../lib/context/context.ts';
import { isEqual } from '@/shared/lib/utils/isEqual.ts';
import modalsController from '@/shared/lib/ModalsController/ModalsController.ts';
import {
  addUserToChatModal,
  deleteChatModal,
  deleteUserFromChatModal,
} from '@/pages/chats-page/lib/context/modalsContext.ts';

export class Header extends Component<HeaderProps, THeaderChildren> {
  constructor() {
    const chat = activeChatProps();

    const componentProps = {
      props: {
        chat: chat,
        chatName: chat?.title,
        className: s.chatHeader,
      },
      children: {
        dropdownMenu: new Dropdown({
          openButton: {
            title: '',
            iconImage: menuIcon,
            variant: ButtonVariant.ICON,
          },
          menu: {
            place: DropdownMenuPlace.BOTTOM_RIGHT,
            options: [
              {
                icon: plusIcon,
                title: 'Добавить пользователя',
                onClick: () => {
                  const modalContent = addUserToChatModal();
                  modalsController.openModal(modalContent);
                },
              },
              {
                icon: crossIcon,
                title: 'Удалить пользователя',
                onClick: () => {
                  const { chat } = this.props;

                  if (chat) {
                    const modalContent = deleteUserFromChatModal(chat.id);
                    modalsController.openModal(modalContent);
                  }
                },
              },
              {
                icon: errorCrossIcon,
                title: 'Удалить переписку',
                onClick: () => {
                  const { chat } = this.props;

                  if (chat) {
                    const modalContent = deleteChatModal(chat.title, chat.id);
                    modalsController.openModal(modalContent);
                  }
                },
              },
            ],
          },
        }),
        avatar: new ChatAvatar({
          avatar: chat?.avatar,
        }),
      },
    };
    super('header', componentProps);
  }

  setProps(nextProps: Partial<HeaderProps> | HeaderProps) {
    if (
      !this.props.chat ||
      (nextProps?.chat && !isEqual(nextProps?.chat, this.props.chat))
    ) {
      (this.children.avatar as Component).setProps({
        avatar: nextProps?.chat?.avatar,
      });
      nextProps = {
        ...nextProps,
        chatName: nextProps?.chat?.title,
      };
    }
    super.setProps(nextProps);
  }

  render() {
    const template = Handlebars.compile(header);
    return this.compile(template);
  }
}

const stateConnect = connect((state: State) => ({
  chat: activeChatProps(state?.activeChat),
}));

export const ChatHeader = stateConnect(Header);
