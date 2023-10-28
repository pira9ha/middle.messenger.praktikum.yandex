import {IAvatarProps} from "../types/avatar.ts";
import DEFAULT_AVATAR from '@/assets/img/default_avatar.png';

export const context = (props: IAvatarProps) => {
    return {
        avatar: DEFAULT_AVATAR,
        ...props,
    };
}