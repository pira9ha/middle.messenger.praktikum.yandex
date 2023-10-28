import Handlebars from 'handlebars';
import profileLayout from '@/shared/ui/layouts/profile/profileLayout.template.ts'
import profileData from "../../ui/components/profileData.template.ts";
import {UserAvatar} from "@/features/userAvatar";
import {Link} from "@/shared/ui/link/Link.ts";
import {Form} from "@/features/form";
import {Button} from "@/shared/ui/button/Button.ts";

Handlebars.registerPartial('profileLayout', profileLayout);
Handlebars.registerPartial('profileData', profileData);
Handlebars.registerPartial({
    userAvatar: UserAvatar,
    link: Link,
    form: Form,
    button: Button,
});