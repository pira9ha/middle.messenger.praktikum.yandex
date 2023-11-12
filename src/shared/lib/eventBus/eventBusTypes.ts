export type TFunctionEvent<T = unknown> = (...args: T[]) => void;

export type TListeners = Record<string, TFunctionEvent[]>;

export interface IEventBus {
  on(event: string, callback: TFunctionEvent): void;
  off(event: string, callback: TFunctionEvent): void;
  emit(event: string, ...args: unknown[]): void;
}
