import {IUser} from "@/models/user.ts";

export interface IAvatarProps {
    avatar?: IUser['avatar'];
    name?: IUser['display_name'];
}