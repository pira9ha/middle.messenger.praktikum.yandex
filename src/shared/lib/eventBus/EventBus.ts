import { IEventBus, TFunctionEvent, TListeners } from './eventBusTypes.ts';

class EventBus implements IEventBus {
  private _listeners: TListeners = {};

  constructor() {}

  on(event: string, callback: TFunctionEvent) {
    if (!this._listeners[event]) {
      this._listeners[event] = [];
    }

    this._listeners[event].push(callback);
  }

  off(event: string, callback: TFunctionEvent) {
    if (!this._listeners[event]) {
      throw new Error(`Событие ${event} не задано`);
    }

    this._listeners[event] = this._listeners[event].filter(
      (listener) => listener !== callback,
    );
  }

  emit(event: string, ...args: Parameters<TFunctionEvent>) {
    if (!this._listeners[event]) {
      throw new Error(`Событие ${event} не задано`);
    }

    this._listeners[event].forEach((listener) => {
      listener(...args);
    });
  }
}

export default EventBus;
