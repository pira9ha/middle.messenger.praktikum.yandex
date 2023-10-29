import { TLinkProps } from '@/shared/ui/link/Link.ts';

export type TErrorPageContext = {
    errorCode: number;
    title: string;
    link: TLinkProps;
};