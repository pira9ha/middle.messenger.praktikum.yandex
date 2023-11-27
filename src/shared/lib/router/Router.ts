import Route from '@/shared/lib/route/Route.ts';
import { TComponentConstructor } from '@/shared/lib/router/routeTypes.ts';

class Router {
  private static __instance: Router;
  private routes: Route[] = [];
  private history = window.history;
  private _currentRoute: null | Route = null;
  private _rootQuery: string = '#app';
  constructor() {
    if (Router.__instance) {
      return Router.__instance;
    }

    this.routes = [];
    this._currentRoute = null;

    Router.__instance = this;
  }

  use(pathname: string, component: TComponentConstructor) {
    const route = new Route(pathname, component, {
      rootQuery: this._rootQuery,
    });

    this.routes.push(route);

    return this;
  }

  start() {
    window.onpopstate = ((event: PopStateEvent) => {
      this._onRoute(event.state?.location.pathname);
    }).bind(this);

    this._onRoute(window.location.pathname);
  }

  _onRoute(pathname: string) {
    const route = this.getRoute(pathname);
    if (!route) {
      return;
    }

    if (this._currentRoute && this._currentRoute !== route) {
      this._currentRoute.leave();
    }

    this._currentRoute = route;
    route.render();
  }

  go(pathname: string) {
    this.history.pushState({}, '', pathname);
    this._onRoute(pathname);
  }

  back() {
    this.history.back();
  }

  forward() {
    this.history.forward();
  }

  getRoute(pathname: string) {
    return this.routes.find((route) => route.match(pathname));
  }
}

export default new Router();