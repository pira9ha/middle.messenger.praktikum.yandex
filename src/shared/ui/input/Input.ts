import Handlebars from "handlebars";
import input from './input.template';
import {IInputFields} from "@/models/form.ts";

export interface IInputProps extends IInputFields{
    labelText: string;
    className?: string;
}

export const Input = (props: IInputProps) => {
    const defaultInputProps = {
        type: 'text',
    };
    const context = {...defaultInputProps, ...props};

    const template = Handlebars.compile(input);
    return template(context);
};