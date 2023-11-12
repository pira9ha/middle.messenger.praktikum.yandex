import Handlebars from 'handlebars';
import profileData from '../../ui/components/profileData.template.ts';
import { UserAvatar } from '@/features/userAvatar';
import { Form } from '@/features/form';
import { Link } from '@/shared/ui';

Handlebars.registerPartial('profileData', profileData);
Handlebars.registerPartial({
  userAvatar: UserAvatar,
  link: Link,
  form: Form,
});
