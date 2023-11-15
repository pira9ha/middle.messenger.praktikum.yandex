import { TModalProps } from '@/features/modal';

export const modalContext: TModalProps = {
  content: {
    title: 'Загрузите файл',
    formContext: {
      uploadInput: {
        labelText: 'Выбрать файл на компьютере',
        name: 'avatar',
      },
      fields: [],
      buttons: [
        {
          title: 'Поменять',
        },
      ],
    },
  },
};
