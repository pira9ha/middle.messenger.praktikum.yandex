import Handlebars from "handlebars";
import s from './button.module.scss';
import button from './button.template';
import {IButtonFields} from "@/models/form.ts";

export enum ButtonVariant {
    TEXT = 'text',
    DEFAULT = 'default',
    ERROR = 'error',
    TEXT_ERROR = 'textError'
}

export interface IButtonProps extends IButtonFields {
    variant?: ButtonVariant;
    className?: string;
}

export const Button = (props: IButtonProps) => {
    const variant = props?.variant ?? ButtonVariant.DEFAULT;
    const defaultInputProps = {
        type: "button",
        className: props?.className,
        styleVariant: s[variant],
    };

    const template = Handlebars.compile(button);
    return template({...defaultInputProps, ...props});
};