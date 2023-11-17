import { Option } from '../../ui/components/Option/Option.ts';
import { DropdownMenu } from '../../ui/components/DropdownMenu/DropdownMenu.ts';
import { Button, IButtonProps } from '@/shared/ui/button';
import { Overlay } from '@/shared/ui/overlay';

export type TDropdown = {
  menu: TDropdownMenu;
  openButton: IButtonProps;
  isOpen?: boolean;
};

export type TDropdownChildren = {
  dropdownMenu: DropdownMenu;
  openButton: Button;
  overlay: Overlay;
};

export enum DropdownMenuPlace {
  TOP_LEFT = 'top-left',
  TOP_RIGHT = 'top-right',
  BOTTOM_LEFT = 'bottom-left',
  BOTTOM_RIGHT = 'bottom-right',
}

export type TDropdownMenuChildren = {
  options: Option[];
};

export type TDropdownMenu = {
  options: TOption[];
  place?: DropdownMenuPlace;
};

export type TOption = {
  title: string;
  onClick?: () => void;
  icon?: string;
};
