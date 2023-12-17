import { MessageModel } from '@/models/chat.ts';
import { TDefaultProps } from '@/shared/lib/component/componentTypes.ts';

export type TMessageProps = TDefaultProps & MessageModel;
