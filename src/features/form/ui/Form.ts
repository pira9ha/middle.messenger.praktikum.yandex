import Handlebars from 'handlebars';
import form from "./form.template";
import {IInputProps, Input} from "@/shared/ui/input/Input.ts";
import {Button, IButtonProps} from "@/shared/ui/button/Button.ts";

Handlebars.registerPartial({
    input: Input,
    button: Button,
});

export type TFormProps<T> = {
    fieldsContext: Record<keyof T, IInputProps>;
    buttonContext: Record<string, IButtonProps>;
    className?: string;
};

export function Form<T>(props: TFormProps<T>) {
    const template = Handlebars.compile(form);
    return template(props);
};
