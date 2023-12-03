import { UserModel } from '@/models/user.ts';

export enum StoreEvents {
  Updated = 'updated',
}

export type Indexed = Record<string, unknown>;

export type State = {
  submitError?: string;
  error?: string;
  user?: UserModel;
  modal?: boolean;
};
