import EventBus from '@/shared/lib/eventBus/EventBus.ts';
import { Indexed, StoreEvents } from './types.ts';
import { set } from '@/shared/lib/utils/set.ts';

class Store extends EventBus {
  private state: Indexed = {};

  public getState() {
    return this.state;
  }

  public set(path: string, value: unknown) {
    set(this.state, path, value);
    this.emit(StoreEvents.Updated);
  }
}

export default new Store();
