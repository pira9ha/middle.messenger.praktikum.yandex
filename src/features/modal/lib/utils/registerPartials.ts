import Handlebars from 'handlebars';
import mainLayout from '@/shared/ui/layouts/main/mainLayout.template.ts'
import {Form} from "@/features/form";
import card from "@/shared/ui/card/card.template.ts";
import {Link} from "@/shared/ui/link/Link.ts";

Handlebars.registerPartial('mainLayout', mainLayout);
Handlebars.registerPartial('card', card);
Handlebars.registerPartial({
    form: Form,
    link: Link,
});