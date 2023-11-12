import { Link, TLinkProps } from '@/shared/ui/link';
import { StatusError, TStatusErrorProps } from '@/features/statusError';

export type TErrorPageContext = {
  link: TLinkProps;
  statusError: TStatusErrorProps;
};

export type TErrorPageChildren = {
  link: Link;
  statusError: StatusError;
};
