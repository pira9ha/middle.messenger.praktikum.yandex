import { MockComponent } from './MockComponent.ts';
import { expect } from 'chai';

describe('Component', () => {
  const testAttr = 'mock';
  const testComponent = new MockComponent({
    className: '.test',
    attr: {
      'data-testid': testAttr,
    },
  });

  it('should render', () => {
    const component = testComponent.getContent();

    expect(component).to.exist;
  });

  it('should render with attr', () => {
    const component = testComponent.getContent();
    const attr = component?.getAttribute('data-testid');

    expect(attr).to.equal(testAttr);
  });

  it('should render with class style', () => {
    const component = testComponent.getContent();
    const style = component?.classList.contains('.test');

    expect(style).to.equal(true);
  });

  it('should update props after setProps', () => {
    const currentProps = { ...testComponent.props };
    testComponent.setProps({
      name: 'test',
    });

    expect(currentProps).to.not.equal(testComponent.props);
  });

  it('should set props after setProps', () => {
    testComponent.setProps({
      test: true,
    });

    expect(testComponent.props.test).to.equal(true);
  });
});
