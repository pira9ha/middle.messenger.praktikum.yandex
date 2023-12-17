import { ChatUserModel, UserModel } from '@/models/user.ts';
import { TDefaultProps } from '@/shared/lib/component/componentTypes.ts';
import { ChatModel, MessageModel } from '@/models/chat.ts';

export enum StoreEvents {
  Updated = 'updated',
}

export type Indexed = Record<string, unknown>;

export type ConnectClassConstructor = {
  new (...args: any[]): { setProps: (props: TDefaultProps) => void };
};

export type State = {
  serverError?: number;
  clientError?: string;
  user?: UserModel;
  modal?: boolean;
  chats?: ChatModel[];
  activeChat?: ChatModel['id'];
  messages?: Record<number, MessageModel[]>;
  chatUsers?: ChatUserModel[];
};
