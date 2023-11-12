import { IMessage } from '@/models/chat.ts';

export enum MessageVariant {
  TEXT = 'text',
  FILE = 'file',
}

export type TMessageProps = {
  messageVariant?: MessageVariant;
} & IMessage;