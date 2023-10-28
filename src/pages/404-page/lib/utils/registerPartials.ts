import Handlebars from 'handlebars';
import {Link} from "@/shared/ui/link/Link.ts";
import mainLayout from "@/shared/ui/layouts/main/mainLayout.template.ts";

Handlebars.registerPartial({
    link: Link,
});
Handlebars.registerPartial('mainLayout', mainLayout);
