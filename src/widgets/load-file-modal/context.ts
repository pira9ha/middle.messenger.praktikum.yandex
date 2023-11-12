import { IModalProps } from '@/features/modal/lib/types/modal.ts';

export const context: IModalProps = {
  title: 'Загрузите файл',
  formContext: {
    fieldsContext: {
      avatar: {
        type: 'file',
        name: 'avatar',
        labelText: 'Выбрать файл на компьютере',
      },
    },
    buttonContext: {
      load: {
        title: 'Поменять',
      },
    },
  },
};
