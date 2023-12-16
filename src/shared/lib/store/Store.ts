import EventBus from '@/shared/lib/eventBus/EventBus.ts';
import { State, StoreEvents } from './types.ts';
import { set } from '@/shared/lib/utils/set.ts';
class Store extends EventBus {
  private state: State = {};

  public getState() {
    return this.state;
  }

  public setState(path: string, value: unknown) {
    set(this.state, path, value);
    console.log(this.state);
    this.emit(StoreEvents.Updated);
  }
}

export default new Store();
