import Handlebars from 'handlebars';
import profileData from '@/pages/profile-page/ui/components/profileInfo/profileInfo.template.ts';
import { UserAvatar } from '@/features/userAvatar';
import { Form } from '@/features/form';
import { Link } from '@/shared/ui';

Handlebars.registerPartial('profileInfo', profileData);
Handlebars.registerPartial({
  userAvatar: UserAvatar,
  link: Link,
  form: Form,
});
