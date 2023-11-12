import s from './textarea.module.scss';
import Component from '@/shared/lib/component/Component.ts';
import { TTextareaProps } from '@/widgets/messageForm/lib/types/messageForm.ts';

export class Textarea extends Component {
  constructor(props: TTextareaProps) {
    const componentProps = {
      props: {
        className: s.messageInput,
        events: {
          input: (event: InputEvent | Event) => {
            const textarea = event.target as HTMLTextAreaElement;
            textarea.style.height = '0';
            textarea.style.height = `${textarea.scrollHeight}px`;
          },
        },
        attr: {
          value: props.value || '',
          placeholder: props.placeholder,
          name: props.name,
        },
      },
    };
    super('textarea', componentProps);
  }

  render() {
    return this.compile();
  }
}
