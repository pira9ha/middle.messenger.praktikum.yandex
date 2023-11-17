import { Button, IButtonProps } from '@/shared/ui/button';
import { Link, TLinkProps } from '@/shared/ui/link';

export type TControlsProps = {
  buttons: IButtonProps[];
  links: TLinkProps[];
};

export type TControlsChildren = {
  buttons: Button[];
  links: Link[];
};
