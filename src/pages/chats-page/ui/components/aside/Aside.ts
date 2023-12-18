import Handlebars from 'handlebars';
import Component from '@/shared/lib/component/Component.ts';
import { TDefaultProps } from '@/shared/lib/component/componentTypes.ts';
import s from './aside.module.scss';
import aside from './aside.template.ts';
import { ChatsList } from '@/widgets/chats';
import {
  TAsideChildren,
  TAsideProps,
} from '@/pages/chats-page/lib/types/chat.ts';
import { Link } from '@/shared/ui/link';
import { InputField } from '@/shared/ui/inputField';
import { connect } from '@/shared/lib/store/connect.ts';
import { State } from '@/shared/lib/store/types.ts';
import { Button } from '@/shared/ui/button';
import modalsController from '@/shared/lib/modalsController/ModalsController.ts';
import { createChatModal } from '@/pages/chats-page/lib/context/modalsContext.ts';
import { plusHuge } from '@/shared/svg';

export class Aside extends Component<
  TAsideProps & TDefaultProps,
  TAsideChildren
> {
  constructor(props: TAsideProps) {
    const componentProps = {
      props: {
        ...props,
        className: s.chats,
      },
      children: {
        chats: new ChatsList(),
        link: new Link(props.link),
        createChat: new Button({
          title: '',
          iconImage: plusHuge,
          customClass: s.CreateChatButton,
          onClick: () => {
            modalsController.openModal(createChatModal);
          },
        }),
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

const stateConnect = connect((state: State) => {
  return {
    chats: state?.chats,
  };
});

export const AsideComponent = stateConnect(Aside);
