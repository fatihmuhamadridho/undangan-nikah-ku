/* eslint-disable @typescript-eslint/no-unused-vars */

import {
  CreateMessageDTO,
  DeleteMessageDTO,
  FindManyMessageDTO,
  FindOneMessageDTO,
  MessageResp,
  UpdateMessageDTO,
} from '@/@core/domain/entities/Message';
import { PromiseResponseProps, ResponseProps } from '../../../domain/entities/Global';
import { MessageRepository } from '../../../domain/repositories/Message.repository';

export class HttpMessageAdapter implements MessageRepository {
  findMany(props?: FindManyMessageDTO): PromiseResponseProps<MessageResp[]> {
    return fetch('/api/message', { method: 'GET', headers: { 'Content-Type': 'application/json' } })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Error fetching messages: ${response.statusText}`);
        }
        return response.json();
      })
      .then((response: ResponseProps<MessageResp[]>) => response)
      .catch((error) => error);
  }

  findOne(props?: FindOneMessageDTO): PromiseResponseProps<MessageResp> {
    throw new Error('Method not implemented.');
  }

  create(props?: CreateMessageDTO): PromiseResponseProps<MessageResp> {
    return fetch('/api/message', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(props?.payload),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Error creating message: ${response.statusText}`);
        }
        return response.json();
      })
      .then((response: ResponseProps<MessageResp>) => response)
      .catch((error) => ({
        status: false,
        message: `Error creating message: ${error.message}`,
      }));
  }

  update(props?: UpdateMessageDTO): PromiseResponseProps<MessageResp> {
    throw new Error('Method not implemented.');
  }

  delete(props?: DeleteMessageDTO): PromiseResponseProps<MessageResp> {
    throw new Error('Method not implemented.');
  }
}
