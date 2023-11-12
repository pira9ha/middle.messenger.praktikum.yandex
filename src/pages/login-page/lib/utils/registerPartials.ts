import Handlebars from 'handlebars';
import { Link } from '@/shared/ui';
import { Form } from '@/features/form';

Handlebars.registerPartial({
  form: Form,
  link: Link,
});
