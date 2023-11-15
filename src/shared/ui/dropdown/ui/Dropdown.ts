import Handlebars from 'handlebars';
import Component from '@/shared/lib/component/Component.ts';
import { TDropdown, TDropdownChildren } from '../lib/types/dropdown.ts';
import { TDefaultProps } from '@/shared/lib/component/componentTypes.ts';
import s from './dropdown.module.scss';
import dropdown from './dropdown.template.ts';
import { DropdownMenu } from './components/DropdownMenu/DropdownMenu.ts';
import { Button } from '@/shared/ui/button';
import { Overlay } from '@/shared/ui/overlay';

export class Dropdown extends Component<
  TDropdown & TDefaultProps,
  TDropdownChildren
> {
  constructor(dropdownProps: TDropdown) {
    const openInternalState = dropdownProps?.isOpen || false;
    const onClickHandler = () => {
      this.setProps({ isOpen: !this.props.isOpen });
    };

    const componentProps = {
      props: {
        ...dropdownProps,
        className: s.dropdown,
        isOpen: openInternalState,
      },
      children: {
        dropdownMenu: new DropdownMenu(dropdownProps.menu),
        openButton: new Button({
          ...dropdownProps.openButton,
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
