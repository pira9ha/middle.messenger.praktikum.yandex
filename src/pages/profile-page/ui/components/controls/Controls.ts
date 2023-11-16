import Component from '@/shared/lib/component/Component.ts';
import s from './controls.module.scss';
import { Link } from '@/shared/ui/link';
import { TDefaultProps } from '@/shared/lib/component/componentTypes.ts';
import {
  TControlsChildren,
  TControlsProps,
} from '../../../lib/types/controls.ts';
import { Button } from '@/shared/ui/button';
import Handlebars from 'handlebars';
import controls from './controls.template.ts';

export class Controls extends Component<TDefaultProps, TControlsChildren> {
  constructor(controlsProps: TControlsProps) {
    const props = {
      className: s.controlWrapper,
    };

    const children: TControlsChildren = {
      buttons: controlsProps.buttons.map((button) => new Button(button)),
      links: controlsProps.links.map((link) => new Link(link)),
    };

    const componentProps = {
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
