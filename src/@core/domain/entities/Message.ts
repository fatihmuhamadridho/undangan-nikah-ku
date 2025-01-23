/* eslint-disable @typescript-eslint/no-explicit-any */

import { DefaultMetaDTOProps, DTOProps, OrderTypeProps } from './Global';

interface Message {
  message_id?: string;
  username: string;
  message: string;
  createdAt?: any;
  updatedAt?: any;
}

export type MessageResp = Omit<Message, 'message_id'>;
export type MessageOrderBy = keyof Omit<Message, 'message_id'>;
export type FindManyMessageDTO = DTOProps<{
  Query?: { orderBy?: MessageOrderBy; orderType?: OrderTypeProps } & DefaultMetaDTOProps;
}>;
export type FindOneMessageDTO = DTOProps<{ Query: Pick<Message, 'message_id'> }>;
export type CreateMessageDTO = DTOProps<{ Payload: Omit<Message, 'message_id' | 'createdAt' | 'updatedAt'> }>;
export type UpdateMessageDTO = DTOProps<{
  Query?: Pick<Message, 'message_id'>;
  Payload: Omit<Message, 'message_id' | 'createdAt' | 'updatedAt'>;
}>;
export type DeleteMessageDTO = DTOProps<{ Query: Pick<Message, 'message_id'> }>;
