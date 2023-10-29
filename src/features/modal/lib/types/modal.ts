import { TFormProps } from '@/features/form/ui/Form.ts';
import { IButtonProps } from '@/shared/ui/button/Button.ts';

export interface IModalProps {
    title: string;
    formContext?: TFormProps<any>;
    buttonContext?: Record<string, IButtonProps>;
}