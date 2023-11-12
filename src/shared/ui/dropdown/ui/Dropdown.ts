import Handlebars from 'handlebars';
import Component from '@/shared/lib/component/Component.ts';
import { TDropdown, TDropdownChildren } from '../lib/types/dropdown.ts';
import {
  IComponentProps,
  TProps,
} from '@/shared/lib/component/componentTypes.ts';
import s from './dropdown.module.scss';
import dropdown from './dropdown.template.ts';
import { DropdownMenu } from './components/DropdownMenu/DropdownMenu.ts';
import { Button } from '@/shared/ui/button';
import { Overlay } from '@/shared/ui/overlay';

export class Dropdown extends Component {
  constructor(props: TDropdown & TProps) {
    const openInternalState = props?.isOpen || false;
    const onClickHandler = () => {
      this.setProps({ isOpen: !this.props.isOpen });
    };

    const componentProps: IComponentProps<TDropdownChildren> = {
      props: {
        ...props,
        className: s.dropdown,
        isOpen: openInternalState,
      },
      children: {
        dropdownMenu: new DropdownMenu(props.menu),
        openButton: new Button({
          ...props.openButton,
          onClick: onClickHandler,
        }),
        overlay: new Overlay({
          onClick: onClickHandler,
        }),
      },
    };
    super('div', componentProps);
  }

  render() {
    const template = Handlebars.compile(dropdown);
    return this.compile(template);
  }
}
