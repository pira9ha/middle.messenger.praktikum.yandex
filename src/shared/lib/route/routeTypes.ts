import Component from '../component/Component.ts';

export type TRouteProps = {
  rootQuery: string;
  [key: string]: unknown;
};

export type TComponentConstructor<T extends Component = Component> = new (
  ...args: any
) => T;
