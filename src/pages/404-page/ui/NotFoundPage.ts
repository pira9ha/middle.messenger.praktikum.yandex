import Handlebars from 'handlebars';
import '../lib/utils/registerPartials.ts';
import notFoundPage from './notFoundPage.template';
import { context } from '@/pages/404-page/lib/context/context.ts';

export const NotFoundPage = () => {
  const template = Handlebars.compile(notFoundPage);
  return template(context);
};
