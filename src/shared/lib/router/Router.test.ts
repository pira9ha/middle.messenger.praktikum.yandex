import router, { Router } from './Router.ts';
import { expect } from 'chai';
import { Routes } from '../../constants/routes.ts';
import sinon, { SinonSpy } from 'sinon';
import { MockComponent } from '../component/MockComponent.ts';

describe('Router', () => {
  const sandbox = sinon.createSandbox();
  let forward: SinonSpy<[], void>;
  let back: SinonSpy<[], void>;

  beforeEach(() => {
    router.use(Routes.CHATS, MockComponent);
    router.use(Routes.NOT_FOUND, MockComponent);
    router.start();

    forward = sandbox.spy(router, 'forward');
    back = sandbox.spy(router, 'back');
  });

  afterEach(() => {
    window.location.replace('');
    sandbox.restore();
  });

  it('should be same instance', () => {
    const testRouter1 = new Router();

    expect(testRouter1).to.deep.equal(router);
  });

  it('should route on page', () => {
    router.go(Routes.CHATS);
    const { location } = window;

    expect(location.pathname).to.equal(Routes.CHATS);
  });

  it('should return not found page on not existing path', () => {
    router.go('/test');
    const { location } = window;

    expect(location.pathname).to.equal(Routes.NOT_FOUND);
  });

  it('should has element on route', () => {
    const routeElement = router.getRoute(Routes.CHATS);

    expect(routeElement).to.not.equal(undefined);
  });

  it('should has not element on route', () => {
    const routeElement = router.getRoute('/test');

    expect(routeElement).to.equal(undefined);
  });

  it('should go forward', () => {
    router.forward();

    expect(forward.calledOnce).to.equal(true);
  });

  it('should go back', () => {
    router.back();

    expect(back.calledOnce).to.equal(true);
  });
});
