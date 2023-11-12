import EventBus from '@/shared/lib/eventBus/EventBus.ts';
import {
  IComponentProps,
  TProps,
  Tag,
  TMeta,
} from '@/shared/lib/component/componentTypes.ts';
import { v4 as makeUUID } from 'uuid';

class Component<Props extends IComponentProps = IComponentProps> {
  static EVENTS = {
    INIT: 'init',
    FLOW_CDM: 'flow:component-did-mount',
    FLOW_CDU: 'flow:component-did-update',
    FLOW_RENDER: 'flow:render',
  };

  private _element: HTMLElement | null = null;
  private _meta: TMeta<Props>;
  private _elementId: string;
  private _isNeedUpdate = false;

  private eventBus: () => EventBus;
  public props: TProps;
  public children: IComponentProps['children'];

  constructor(tagName: Tag = 'div', props: Props) {
    const { props: elementProps, children } = this._getChildren(props);

    const eventBus = new EventBus();
    this._meta = {
      tagName,
      props,
    };

    this._elementId = makeUUID();

    this.props = this._makePropsProxy({ ...elementProps, id: this._elementId });
    this.children = children;

    this.eventBus = () => eventBus;

    this._registerEvents(eventBus);
    eventBus.emit(Component.EVENTS.INIT);
  }

  _registerEvents(eventBus: EventBus) {
    eventBus.on(Component.EVENTS.INIT, this.init.bind(this));
    eventBus.on(Component.EVENTS.FLOW_CDM, this._componentDidMount.bind(this));
    // @ts-ignore
    eventBus.on(Component.EVENTS.FLOW_CDU, this._componentDidUpdate.bind(this));
    eventBus.on(Component.EVENTS.FLOW_RENDER, this._render.bind(this));
  }

  _createResources() {
    const { tagName } = this._meta;
    this._element = this._createDocumentElement(tagName);
  }

  init() {
    this._createResources();

    this.eventBus().emit(Component.EVENTS.FLOW_RENDER);
  }

  _componentDidMount() {
    this.componentDidMount();

    if (this.children) {
      Object.values(this.children).forEach((child) => {
        if (child instanceof Component) {
          child.dispatchComponentDidMount();
        }
      });
    }
  }

  componentDidMount() {}

  dispatchComponentDidMount() {
    this.eventBus().emit(Component.EVENTS.FLOW_CDM);
  }

  _componentDidUpdate(oldProps: TProps, newProps: TProps) {
    const response = this.componentDidUpdate(oldProps, newProps);
    if (!response) {
      return;
    }
    this._render();
  }

  componentDidUpdate(oldProps: TProps, newProps: TProps) {
    const newPropsValues = Object.entries(newProps);

    for (const [key, value] of newPropsValues) {
      if (oldProps[key] !== value) {
        return true;
      }
    }

    return false;
  }

  setProps(nextProps: TProps) {
    if (!nextProps) {
      return;
    }

    const oldProps = Object.assign({}, this.props);
    Object.assign(this.props, nextProps);

    if (this._isNeedUpdate) {
      this.eventBus().emit(Component.EVENTS.FLOW_CDU, oldProps, this.props);
      this._isNeedUpdate = false;
    }
  }

  get element() {
    return this._element;
  }

  compile(
    template?: (props?: TProps) => string,
    props?: TProps,
  ): DocumentFragment {
    if (typeof props === 'undefined') {
      props = this.props;
    }

    const fragment = this._createDocumentElement(
      'template',
    ) as HTMLTemplateElement;

    if (!this.children || !template) {
      return fragment.content;
    }

    if (typeof this.children === 'string') {
      fragment.innerHTML = template();
    } else {
      this._setTemplateChildrens({ ...props }, fragment, template);
    }

    return fragment.content;
  }

  _setTemplateChildrens(
    props: TProps,
    fragment: HTMLTemplateElement,
    template: (props?: TProps) => string,
  ) {
    if (!this.children) {
      return;
    }

    Object.entries(this.children).forEach(([key, children]) => {
      const propsItem = props;

      if (Array.isArray(children)) {
        children.forEach((child, i) => {
          const propsChild = propsItem[key];
          if (Array.isArray(propsChild)) {
            propsChild[i] = `<div data-id="${child._elementId}"></div>`;
          }
        });
      } else {
        propsItem[key] =
          children instanceof Component
            ? `<div data-id="${children._elementId}"></div>`
            : '';
      }
    });

    fragment.innerHTML = template(props);

    Object.values(this.children).forEach((children) => {
      if (Array.isArray(children)) {
        children.forEach((child) => {
          const stub = fragment.content.querySelector(
            `[data-id="${child._elementId}"]`,
          );

          stub?.replaceWith(child.getContent() || '');
        });
      } else {
        if (children instanceof Component) {
          const stub = fragment.content.querySelector(
            `[data-id="${children._elementId}"]`,
          );
          stub?.replaceWith(children.getContent() || '');
        }
      }
    });
  }

  _render() {
    const component: DocumentFragment = this.render();

    this._removeEvents();

    if (this._element) {
      this._element.innerHTML = '';
      this._element.appendChild(component);
    }
    this._addEvents();
  }

  render(): DocumentFragment {
    throw new Error('render() not implemented');
  }

  getContent() {
    return this.element;
  }

  _makePropsProxy(props: TProps): TProps {
    const self = this;

    return new Proxy(props, {
      get(target: TProps, prop: string) {
        const value = target[prop];
        return typeof value === 'function' ? value.bind(target) : value;
      },
      set(target: TProps, prop: string, value: unknown) {
        if (target[prop] !== value) {
          self._isNeedUpdate = true;
        }

        target[prop] = value;
        return true;
      },
      deleteProperty() {
        throw new Error('Нет доступа');
      },
    });
  }

  _getChildren(propsAndChildren: IComponentProps) {
    const { children = {}, props = {} } = propsAndChildren;

    return { children, props };
  }

  _createDocumentElement(tagName: Tag) {
    const element = document.createElement(tagName);
    let { attr = {} } = this.props;
    const { className = [] } = this.props;
    attr = { ...attr, 'data-id': this._elementId };

    Object.entries(attr).forEach(([key, value]) => {
      if (value) {
        element.setAttribute(key, value.toString());
      }
    });

    if (Array.isArray(className)) {
      className.forEach((elementClass) => {
        element.classList.add(elementClass);
      });
    } else {
      element.classList.add(className);
    }

    return element;
  }

  _addEvents() {
    const { events } = this.props;

    if (this._element && events) {
      Object.entries(events).forEach(([eventName, event]) => {
        this._element!.addEventListener(eventName, event);
      });
    }
  }

  _removeEvents() {
    const { events } = this.props;

    if (this._element && events) {
      Object.entries(events).forEach(([eventName, event]) => {
        this._element!.removeEventListener(eventName, event);
      });
    }
  }

  show() {
    const component = this.getContent();

    if (component) {
      component.style.display = 'block';
    }
  }

  hide() {
    const component = this.getContent();

    if (component) {
      component.style.display = 'none';
    }
  }
}

export default Component;
