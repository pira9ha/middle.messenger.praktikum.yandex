import Component from '@/shared/lib/component/Component.ts';
import s from './controls.module.scss';
import { Link } from '@/shared/ui';
import { IComponentProps } from '@/shared/lib/component/componentTypes.ts';
import {
  TControlsChildren,
  TControlsProps,
} from '../../../lib/types/controls.ts';
import { Button } from '@/shared/ui/button';
import Handlebars from 'handlebars';
import controls from './controls.template.ts';

export class Controls extends Component {
  constructor(controlsProps: TControlsProps) {
    const props = {
      ...controlsProps,
      className: s.controlWrapper,
    };

    const children: TControlsChildren = {
      buttons: controlsProps.buttons.map((button) => new Button(button)),
      links: controlsProps.links.map((link) => new Link(link)),
    };

    const componentProps: IComponentProps<TControlsChildren> = {
      props,
      children,
    };

    super('div', componentProps);
  }

  render() {
    const template = Handlebars.compile(controls);
    return this.compile(template);
  }
}
