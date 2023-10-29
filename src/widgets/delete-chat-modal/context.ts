import { IModalProps } from '@/features/modal/lib/types/modal.ts';
import { ButtonVariant } from '@/shared/ui/button/Button.ts';

export const context: IModalProps = {
	title: 'Удалить переписку с пользователем Вадим?',
	buttonContext: {
		delete: {
			type: 'button',
			title: 'Удалить',
			variant: ButtonVariant.ERROR,
		},
		cancel: {
			type: 'button',
			title: 'Отмена',
		}
	}
};