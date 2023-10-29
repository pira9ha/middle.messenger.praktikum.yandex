import Handlebars from 'handlebars';
import link from './link.template';
import s from './link.module.scss';
import { classNames } from '@/shared/utils/classNames.ts';
import arrowIcon from '@/shared/svg/arrowIcon.template.ts';

Handlebars.registerPartial('arrowIcon', arrowIcon);

export type TLinkProps = {
    path: string;
    title?: string;
    className?: string;
    type?: 'text' | 'icon';
}

export const Link = (props: TLinkProps) => {
	const className = classNames(props?.className, [s[props?.type ?? 'text']]);
	const template = Handlebars.compile(link);
	return template({ ...props, className });
};
