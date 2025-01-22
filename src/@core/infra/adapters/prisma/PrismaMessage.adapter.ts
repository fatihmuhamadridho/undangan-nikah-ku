/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */

import { prisma } from '@/@core/databases/prisma';
import { DTOProps, ResponseProps } from '../../../domain/entities/Global';
import { MessageRepository } from '../../../domain/repositories/Message.repository';
import { Message } from '@/@core/domain/entities/Message';

export class PrismaMessageAdapter implements MessageRepository {
  async findMany(params?: DTOProps<any, any, any>): Promise<ResponseProps<Message[]>> {
    const totalData = await prisma.message.count();
    return prisma.message
      .findMany()
      .then(
        (response: Message[]) =>
          ({
            status: true,
            message: 'Messages retrieved successfully',
            meta: {
              totalData: totalData,
            },
            data: response,
          }) as ResponseProps<Message[]>,
      )
      .catch((error) => ({
        status: false,
        message: `Error fetching messages: ${error.message}`,
      }));
  }
  findOne(params?: DTOProps<any, any, any>): Promise<ResponseProps<Message>> {
    throw new Error('Method not implemented.');
  }
  create(params?: DTOProps<any, any, any>): Promise<ResponseProps<Message>> {
    return prisma.message
      .create({ data: { message: 'test', username: 'test' } })
      .then((response) => ({
        status: true,
        message: 'Messages retrieved successfully',
        data: response,
      }))
      .catch((error) => ({
        status: false,
        message: `Error fetching messages: ${error.message}`,
      }));
  }
  update(params?: DTOProps<any, any, any>): Promise<ResponseProps<Message>> {
    throw new Error('Method not implemented.');
  }
  delete(params?: DTOProps<any, any, any>): Promise<ResponseProps<Message>> {
    throw new Error('Method not implemented.');
  }
}
