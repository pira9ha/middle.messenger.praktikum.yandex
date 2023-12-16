import s from '../../ui/chatPage.module.scss';
import { TModalProps } from '@/features/modal';
import chatsService from '@/service/ChatsService.ts';
import { NewChatRequest } from '@/models/chat.ts';
import { fromFormData } from '@/shared/lib/utils/fromFormData';
import modalsController from '@/shared/lib/ModalsController/ModalsController.ts';
import { ButtonVariant } from '@/shared/ui/button';
import store from '@/shared/lib/store/Store.ts';
import { TInputFieldProps } from '@/shared/ui/inputField';
import { TFormProps } from '@/features/form/lib/types/form.ts';
import { AddUserModal } from '@/pages/chats-page/ui/components/addUserModal/AddUserModal.ts';

export const createChatModal: TModalProps = {
  content: {
    title: 'Создать чат',
    formContext: {
      fields: [
        {
          input: {
            name: 'title',
            value: '',
          },
          label: {
            labelText: 'Название чата',
            for: 'title',
          },
        },
      ],
      buttons: [
        {
          title: 'Создать',
          type: 'submit',
        },
      ],
      submit: async (newChat) => {
        const newChatData = fromFormData<NewChatRequest>(newChat);
        const res = await chatsService.createChats(newChatData);

        if (res) {
          modalsController.closeModal();
        }
      },
    },
  },
};

export const deleteChatModal = (
  chatName: string,
  chatId: number,
): TModalProps => ({
  content: {
    title: `Удалить переписку ${chatName}?`,
    buttons: [
      {
        title: 'Удалить',
        variant: ButtonVariant.ERROR,
        onClick: async () => {
          const res = await chatsService.deleteChat(chatId);

          if (res) {
            modalsController.closeModal();
          }
        },
      },
      {
        title: 'Отмена',
        onClick: () => modalsController.closeModal(),
      },
    ],
  },
});

export const deleteUserFromChatModal = (chatId: number): TModalProps => {
  const { chatUsers } = store.getState();
  const fields: TInputFieldProps[] = [];

  const content: TModalProps['content'] = {
    title: 'Выберите пользователей, которых хотите удалить',
  };

  const formContext: TFormProps = {
    fields,
    buttons: [
      {
        title: 'Удалить',
        type: 'submit',
        disabled: !chatUsers?.length,
      },
    ],
    submit: async (selectedUsers: FormData) => {
      const newChatData = fromFormData<NewChatRequest>(selectedUsers);
      const userIds = Object.values(newChatData).map((id) => Number(id));
      const res = await chatsService.deleteUserFromChat(userIds, chatId);

      if (res) {
        modalsController.closeModal();
      }
    },
  };

  const buttons = [
    {
      title: 'Закрыть',
      onClick: () => {
        modalsController.closeModal();
      },
    },
  ];

  if (chatUsers?.length) {
    formContext.fields = chatUsers.map((user) => ({
      input: {
        name: 'user',
        value: String(user.id),
        type: 'checkbox',
        className: s.checkboxSelect,
      },
      label: {
        labelText: user.login,
        for: 'user',
      },
    }));

    content.formContext = formContext;
  } else {
    content.buttons = buttons;
  }

  return {
    content,
  };
};

export const addUserToChatModal = (): TModalProps => ({
  content: {
    title: 'Добавить пользователя',
    customForm: AddUserModal,
    isCustom: true,
    buttons: [
      {
        title: 'Отмена',
        onClick: () => modalsController.closeModal(),
      },
    ],
  },
});
