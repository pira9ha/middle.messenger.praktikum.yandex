import Component from '@/shared/lib/component/Component.ts';

export type Tag = keyof HTMLElementTagNameMap;

export type EventName = keyof DocumentEventMap;
export type EventListener<T extends keyof DocumentEventMap> = (
  event: DocumentEventMap[T],
) => void;
export type Event = Record<EventName, EventListener<EventName>>;

export type TProps = {
  events?: Partial<Event>;
  attr?: Record<string, unknown>;
  className?: string | string[];
  [prop: string]: unknown;
};

export type TChildren<T> = {
  [child in keyof T]: T[child] extends Component
    ? T[child] | T[child][]
    : unknown;
};

export interface IComponentProps<T = unknown> {
  children?: TChildren<T>;
  props: TProps;
}

export type TMeta<T> = {
  tagName: Tag;
  props?: T;
};
