import { TComponentConstructor, TRouteProps } from './routeTypes.ts';
import Component from '@/shared/lib/component/Component.ts';

export default class Route {
  private _pathname: string | undefined;
  private _blockClass: TComponentConstructor;
  private _block: null | Component;
  private _props: TRouteProps;

  constructor(
    pathname: string,
    view: TComponentConstructor,
    props: TRouteProps,
  ) {
    this._pathname = pathname;
    this._blockClass = view;
    this._block = null;
    this._props = props;
  }

  navigate(pathname: string) {
    if (this.match(pathname)) {
      this._pathname = pathname;
      this.render();
    }
  }

  leave() {
    if (this._block) {
      this._block.hide();
    }
  }

  match(pathname: string) {
    return pathname === this._pathname;
  }

  render() {
    if (!this._block) {
      this._block = new this._blockClass();
    }
    this._block.show(this._props.rootQuery);
  }
}
