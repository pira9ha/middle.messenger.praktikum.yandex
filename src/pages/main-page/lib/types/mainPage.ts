import { TLinkProps } from '@/shared/ui/link/ui/Link.ts';
import Component from '@/shared/lib/component/Component.ts';

type TPage = {
  name: string;
  component(): string | Component;
  link: TLinkProps;
};
export type TMainPageContext = Record<string, TPage>;
