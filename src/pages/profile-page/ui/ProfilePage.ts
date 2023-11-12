import Handlebars from 'handlebars';
import '../lib/utils/registerPartials.ts';
import profile from './profilePage.template';
import { context } from '../lib/context/context.ts';

export const ProfilePage = () => {
  const template = Handlebars.compile(profile);
  return template(context());
};
