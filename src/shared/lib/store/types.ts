import { UserModel } from '@/models/user.ts';
import { TDefaultProps } from '@/shared/lib/component/componentTypes.ts';
import { TChatsProps } from '@/widgets/chats/lib/types/chats.ts';

export enum StoreEvents {
  Updated = 'updated',
}

export type Indexed = Record<string, unknown>;

export type ConnectClassConstructor = {
  new (...args: any[]): { setProps: (props: TDefaultProps) => void };
};

export type State = {
  serverError?: string;
  clientError?: string;
  user?: UserModel;
  modal?: boolean;
  chats?: TChatsProps['chats'];
};
