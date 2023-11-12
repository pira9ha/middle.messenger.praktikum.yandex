import Handlebars from 'handlebars';
import Component from '@/shared/lib/component/Component.ts';
import { IComponentProps } from '@/shared/lib/component/componentTypes.ts';
import s from './aside.module.scss';
import aside from './aside.template.ts';
import { Chats } from '@/widgets/chats';
import {
  TAsideChildren,
  TAsideProps,
} from '@/pages/chats-page/lib/types/chat.ts';
import { Link } from '@/shared/ui/link';
import { InputField } from '@/shared/ui/inputField';

export class Aside extends Component {
  constructor(props: TAsideProps) {
    const componentProps: IComponentProps<TAsideChildren> = {
      props: {
        ...props,
        className: s.chats,
      },
      children: {
        chats: new Chats(props.chats),
        link: new Link(props.link),
        searchInput: new InputField({
          ...props.searchInput,
          input: {
            ...props.searchInput.input,
            events: {
              input: (event: InputEvent | Event) => {
                if (event instanceof InputEvent) {
                  console.log((event.target as HTMLInputElement).value);
                }
              },
            },
          },
        }),
      },
    };
    super('aside', componentProps);
  }

  render() {
    const template = Handlebars.compile(aside);
    return this.compile(template);
  }
}
