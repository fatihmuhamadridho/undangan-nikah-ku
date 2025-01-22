/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */

import { Message } from '@/@core/domain/entities/Message';
import { DTOProps, ResponseProps } from '../../../domain/entities/Global';
import { MessageRepository } from '../../../domain/repositories/Message.repository';

export class HttpMessageAdapter implements MessageRepository {
  findMany(params?: DTOProps<any, any, any>): Promise<ResponseProps<Message[]>> {
    return fetch('/api/message')
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Error fetching messages: ${response.statusText}`);
        }
        return response.json();
      })
      .then((response: ResponseProps<Message[]>) => response)
      .catch((error) => error);
  }
  findOne(params?: DTOProps<any, any, any>): Promise<ResponseProps<Message>> {
    throw new Error('Method not implemented.');
  }
  create(params?: DTOProps<any, any, any>): Promise<ResponseProps<Message>> {
    throw new Error('Method not implemented.');
  }
  update(params?: DTOProps<any, any, any>): Promise<ResponseProps<Message>> {
    throw new Error('Method not implemented.');
  }
  delete(params?: DTOProps<any, any, any>): Promise<ResponseProps<Message>> {
    throw new Error('Method not implemented.');
  }
}
