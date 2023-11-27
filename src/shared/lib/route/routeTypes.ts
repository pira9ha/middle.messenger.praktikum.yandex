import Component from '../component/Component.ts';

export type TRouteProps = {
  rootQuery: string;
  [key: string]: unknown;
};

export type TComponentConstructor = new (...args: any) => Component;
