import Handlebars from 'handlebars';
import link from './link.template';

export type TLinkProps = {
    title: string;
    path: string;
    pageSelector: string;
}

export const Link = ({ path, title, pageSelector}: TLinkProps) => {
    const context = {
        path,
        title,
        pageSelector,
    };

    const template = Handlebars.compile(link);

    return template(context);
}