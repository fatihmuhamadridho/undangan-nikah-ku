/* eslint-disable @typescript-eslint/no-explicit-any */

import { DTOProps, ResponseProps } from '../entities/Global';
import { Message } from '../entities/Message';

export abstract class MessageRepository {
  abstract findMany(params?: DTOProps<any, any, any>): Promise<ResponseProps<Message[]>>;
  abstract findOne(params?: DTOProps<any, any, any>): Promise<ResponseProps<Message>>;
  abstract create(params?: DTOProps<any, any, any>): Promise<ResponseProps<Message>>;
  abstract update(params?: DTOProps<any, any, any>): Promise<ResponseProps<Message>>;
  abstract delete(params?: DTOProps<any, any, any>): Promise<ResponseProps<Message>>;
}
