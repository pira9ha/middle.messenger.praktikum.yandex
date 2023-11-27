import Component from '../component/Component.ts';

export type TComponentConstructor = new (...args: any) => Component;
