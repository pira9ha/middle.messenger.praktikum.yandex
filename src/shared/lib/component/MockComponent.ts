import Component from './Component.ts';
import { TDefaultProps } from './componentTypes.ts';

export class MockComponent extends Component {
  constructor(testProps: TDefaultProps = {}) {
    const props = {
      props: testProps,
      children: {},
    };

    super('div', props);
  }

  render() {
    return this.compile();
  }
}
