import { TModalProps } from '@/features/modal';
import userService from '@/service/UserService.ts';

export const modalContext: TModalProps = {
  content: {
    title: 'Загрузите файл',
    formContext: {
      uploadInput: {
        labelText: 'Выбрать файл на компьютере',
        name: 'avatar',
        accept: 'image/jpg, image/jpeg, image/png, image/gif',
      },
      fields: [],
      buttons: [
        {
          title: 'Поменять',
          type: 'submit',
        },
      ],
      submit: (avatarFile) => {
        userService.changeAvatar(avatarFile);
      },
    },
  },
};
