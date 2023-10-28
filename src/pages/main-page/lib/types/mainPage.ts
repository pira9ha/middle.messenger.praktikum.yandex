import {TLinkProps} from "@/shared/ui/link/Link.ts";

type TPage = {
    name: string;
    component(): string;
    link: TLinkProps;
};
export type TMainPageContext = Record<string, TPage | any>;