import { Link, TLinkProps } from '@/shared/ui/link';
import Component from '@/shared/lib/component/Component.ts';

type TPage = {
  name: string;
  component(): string | Component;
  link: TLinkProps;
};
export type TMainPageContext = {
  links: TPage[];
};
export type TMainPageChildren = {
  links: Link[];
};
