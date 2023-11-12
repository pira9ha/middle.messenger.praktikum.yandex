import Handlebars from 'handlebars';
import { Form } from '@/features/form';
import { Link } from '@/shared/ui';

Handlebars.registerPartial({
  form: Form,
  link: Link,
});
