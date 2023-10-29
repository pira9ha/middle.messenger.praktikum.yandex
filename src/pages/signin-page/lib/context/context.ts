import { TFormProps } from '@/features/form/ui/Form.ts';
import { TLinkProps } from '@/shared/ui/link/Link.ts';
import s from '../../ui/signinPage.module.scss';
import { IUserRegistration } from '@/models/user.ts';

const formContext: TFormProps<Omit<IUserRegistration, 'id' | 'avatar' | 'display_name'>> = {
	fieldsContext: {
		email: {
			name: 'email',
			labelText: 'Почта',
			type: 'email'
		},
		login: {
			name: 'login',
			labelText: 'Логин',
		},
		first_name: {
			name: 'first_name',
			labelText: 'Имя',
		},
		second_name: {
			name: 'second_name',
			labelText: 'Фамилия',
		},
		phone: {
			name: 'phone',
			labelText: 'Телефон',
			type: 'tel'
		},
		password: {
			name: 'password',
			labelText: 'Пароль',
			type: 'password',
			autocomplete: 'off'
		},
		password_check: {
			name: 'password_check',
			labelText: 'Пароль (ещё раз)',
			type: 'password',
			autocomplete: 'off'
		},
	},
	buttonContext: {
		login: {
			type: 'submit',
			title: 'Зарегистрироваться',
		}
	},
	className: s.signinPage_form,
};
const linkContext: TLinkProps = {
	path: '/login',
	title: 'Войти',
	className: s.link,
};

export const context = {
	formName: 'Регистрация',
	formContext,
	linkContext,
};