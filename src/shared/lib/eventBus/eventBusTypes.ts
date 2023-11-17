export type TFunctionEvent = (...args: any[]) => void;

export type TListeners = Record<string, TFunctionEvent[]>;

export interface IEventBus {
  on(event: string, callback: TFunctionEvent): void;
  off(event: string, callback: TFunctionEvent): void;
  emit(event: string, ...args: Parameters<TFunctionEvent>): void;
}
