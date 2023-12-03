import { Indexed, StoreEvents } from '@/shared/lib/store/types.ts';
import store from './Store.ts';
import { isEqual } from '../utils/isEqual.ts';
import { TComponentConstructor } from '@/shared/lib/route/routeTypes.ts';
import Component from '@/shared/lib/component/Component.ts';

export function connect(mapStateToProps: (state: Indexed) => Indexed) {
  return function <T extends Component>(
    ComponentElement: TComponentConstructor<T>,
  ) {
    // @ts-ignore
    return class extends ComponentElement {
      constructor(...props: any[]) {
        // сохраняем начальное состояние
        let state = mapStateToProps(store.getState());

        super(...props, { ...state });

        // подписываемся на событие
        store.on(StoreEvents.Updated, () => {
          // при обновлении получаем новое состояние
          const newState = mapStateToProps(store.getState());

          // если что-то из используемых данных поменялось, обновляем компонент
          if (!isEqual(state, newState)) {
            this.setProps({ ...newState });
          }

          // не забываем сохранить новое состояние
          state = newState;
        });
      }
    };
  };
}
