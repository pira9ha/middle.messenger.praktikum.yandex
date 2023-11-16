import Component from '@/shared/lib/component/Component.ts';

export type Tag = keyof HTMLElementTagNameMap;

export type EventName = keyof DocumentEventMap;
export type EventListener<T extends keyof DocumentEventMap> = (
  event: DocumentEventMap[T],
) => void;
export type Event = Record<EventName, EventListener<EventName>>;

export type TDefaultProps = {
  events?: Partial<Event>;
  attr?: Record<string, unknown>;
  className?: string | string[];
  id?: number;
  [prop: string]: unknown;
};

export type TDefaultChildren = Record<string, Component | Component[]>;

export interface IComponentProps<
  Props extends TDefaultProps,
  Children extends TDefaultChildren,
> {
  children?: Children;
  props: Props;
}

export type TMeta<T> = {
  tagName: Tag;
  props?: T;
};
