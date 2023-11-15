import Handlebars from 'handlebars';
import Component from '@/shared/lib/component/Component.ts';
import {
  DropdownMenuPlace,
  TDropdownMenu,
  TDropdownMenuChildren,
} from '../../../lib/types/dropdown.ts';
import { TDefaultProps } from '@/shared/lib/component/componentTypes.ts';
import { Option } from '../Option/Option.ts';
import s from './dropdownMenu.module.scss';
import dropdownMenu from './dropdownMenu.template.ts';
import { classNames } from '@/shared/lib/utils/classNames.ts';

export class DropdownMenu extends Component<
  TDropdownMenu & TDefaultProps,
  TDropdownMenuChildren
> {
  constructor(props: TDropdownMenu) {
    const placeVariant = props.place || DropdownMenuPlace.BOTTOM_RIGHT;

    const componentProps = {
      props: {
        ...props,
        className: classNames(s.dropdownMenu, [s[placeVariant]]),
      },
      children: {
        options: props.options.map(
          (optionItem) =>
            new Option({
              ...optionItem,
              onClick: () => {
                console.log(`click on ${optionItem.title}`);
              },
            }),
        ),
      },
    };
    super('ul', componentProps);
  }

  render() {
    const template = Handlebars.compile(dropdownMenu);
    return this.compile(template);
  }
}
