import Handlebars from 'handlebars';
import messageInput from './messageForm.template.ts';
import {
  TMessageChildrenProps,
  TMessageFormProps,
} from '../lib/types/messageForm.ts';
import Component from '@/shared/lib/component/Component.ts';
import s from './messageForm.module.scss';
import {
  IComponentProps,
  TProps,
} from '@/shared/lib/component/componentTypes.ts';
import { Button } from '@/shared/ui/button';
import { Dropdown } from '@/shared/ui/dropdown';
import { Textarea } from './components/Textarea.ts';

export class MessageForm extends Component {
  constructor(props: TMessageFormProps & TProps) {
    const componentProps: IComponentProps<TMessageChildrenProps> = {
      props: {
        ...props,
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
      },
      children: {
        dropdown: new Dropdown(props.dropdownAdd),
        sendButton: new Button(props.sendButton),
        textarea: new Textarea(props.input),
      },
    };
    super('form', componentProps);
  }

  render() {
    const template = Handlebars.compile(messageInput);
    return this.compile(template);
  }
}
