import Handlebars from 'handlebars';
import messageInput from './messageForm.template.ts';
import {
  TMessageChildrenProps,
  TMessageFormProps,
} from '../lib/types/messageForm.ts';
import Component from '@/shared/lib/component/Component.ts';
import s from './messageForm.module.scss';
import { TDefaultProps } from '@/shared/lib/component/componentTypes.ts';
import { Button } from '@/shared/ui/button';
import { Dropdown } from '@/shared/ui/dropdown';
import { Textarea } from './components/Textarea.ts';

export class MessageForm extends Component<
  TDefaultProps,
  TMessageChildrenProps
> {
  constructor(messageFormProps: TMessageFormProps) {
    const props: TDefaultProps = {
      className: s.messageForm,
      events: {
        submit: (event: SubmitEvent | Event) => {
          event.preventDefault();

          if (event.currentTarget && event instanceof SubmitEvent) {
            const formData = new FormData(
              event.currentTarget as HTMLFormElement,
            );
            console.log(...formData);
          }
        },
      },
    };

    const children: TMessageChildrenProps = {
      dropdown: new Dropdown(messageFormProps.dropdownAdd),
      sendButton: new Button(messageFormProps.sendButton),
      textarea: new Textarea(messageFormProps.input),
    };

    const componentProps = {
      props,
      children,
    };
    super('form', componentProps);
  }

  render() {
    const template = Handlebars.compile(messageInput);
    return this.compile(template);
  }
}
