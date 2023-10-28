import Handlebars from 'handlebars';
import userAvatar from './userAvatar.template.ts';
import {IAvatarProps} from "../lib/types/avatar.ts";
import {context} from "../lib/context/context.ts";

export const UserAvatar = (props: IAvatarProps) => {
    const template = Handlebars.compile(userAvatar);
    return template(context(props));
}