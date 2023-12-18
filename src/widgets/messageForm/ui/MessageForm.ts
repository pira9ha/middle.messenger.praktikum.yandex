import Handlebars from 'handlebars';
import messageInput from './messageForm.template.ts';
import { TMessageChildrenProps } from '../lib/types/messageForm.ts';
import Component from '@/shared/lib/component/Component.ts';
import s from './messageForm.module.scss';
import { TDefaultProps } from '@/shared/lib/component/componentTypes.ts';
import { Button, ButtonVariant } from '@/shared/ui/button';
import { Dropdown } from '@/shared/ui/dropdown';
import { Textarea } from './components/Textarea.ts';
import {
  arrowRightIcon,
  fileIcon,
  imageIcon,
  locationIcon,
  stapleIcon,
} from '@/shared/svg';
import { DropdownMenuPlace } from '@/shared/ui/dropdown/lib/types/dropdown.ts';
import messagesController from '@/shared/lib/messagesController/MessagesController.ts';
import store from '@/shared/lib/store/Store.ts';

export class MessageForm extends Component<
  TDefaultProps,
  TMessageChildrenProps
> {
  constructor() {
    const props: TDefaultProps = {
      className: s.messageForm,
      events: {
        submit: (event: SubmitEvent | Event) => {
          const state = store.getState();
          const element = (this.children.textarea as Textarea).getContent();
          event.preventDefault();

          if (
            state?.activeChat &&
            element instanceof HTMLTextAreaElement &&
            element.value
          ) {
            messagesController.sendMessage(state?.activeChat, element.value);
            element.value = '';
          }
        },
      },
    };

    const children: TMessageChildrenProps = {
      dropdown: new Dropdown({
        openButton: {
          title: '',
          iconImage: stapleIcon,
          variant: ButtonVariant.ICON,
        },
        menu: {
          place: DropdownMenuPlace.TOP_LEFT,
          options: [
            {
              icon: imageIcon,
              title: 'Фото или Видео',
            },
            {
              icon: fileIcon,
              title: 'Файл',
            },
            {
              icon: locationIcon,
              title: 'Локация',
            },
          ],
        },
      }),
      sendButton: new Button({
        title: '',
        type: 'submit',
        variant: ButtonVariant.ICON,
        iconImage: arrowRightIcon,
      }),
      textarea: new Textarea({
        name: 'message',
        placeholder: 'Сообщение',
      }),
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
