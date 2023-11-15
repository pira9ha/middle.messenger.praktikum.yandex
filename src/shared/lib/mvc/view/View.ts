import { Controller } from '../controller/Controller.ts';
import Component from '@/shared/lib/component/Component.ts';

export class View {
  controller: Controller;
  view: Component;

  constructor(viewComponent: Component) {
    this.view = viewComponent;
    this.controller = new Controller();
  }
}
