import Handlebars from 'handlebars';
import mainLayout from '@/shared/ui/layouts/main/mainLayout.template.ts';
import { Form } from '@/features/form';
import { Link } from '@/shared/ui/link/Link.ts';

Handlebars.registerPartial('mainLayout', mainLayout);
Handlebars.registerPartial({
	form: Form,
	link: Link,
});
