/* eslint-disable @typescript-eslint/no-unused-vars */

import { prisma } from '@/@core/databases/prisma';
import { DTOProps, PromiseResponseProps, ResponseProps } from '../../../domain/entities/Global';
import { MessageRepository } from '../../../domain/repositories/Message.repository';
import {
  CreateMessageDTO,
  DeleteMessageDTO,
  FindOneMessageDTO,
  MessageResp,
  UpdateMessageDTO,
} from '@/@core/domain/entities/Message';
import { GenerateMeta } from '../../utils/generateMeta';

export class PrismaMessageAdapter implements MessageRepository {
  async findMany(props?: DTOProps): PromiseResponseProps<MessageResp[]> {
    const { page = 1, limit = 10 } = props?.query || {};
    const totalData = await prisma.message.count();
    const metaData = new GenerateMeta(totalData, page, limit);
    return prisma.message
      .findMany({
        take: metaData.getLimit(),
        skip: metaData.getOffset(),
        select: { message_id: false, message: true, username: true, createdAt: true, updatedAt: true },
      })
      .then(
        (response: MessageResp[]) =>
          ({
            status: true,
            message: 'Messages retrieved successfully',
            meta: {
              currentPage: metaData.currentPage,
              pageSize: metaData.pageSize,
              totalData: metaData.totalData,
              totalPage: metaData.totalPage,
            },
            data: response,
          }) as ResponseProps<MessageResp[]>,
      )
      .catch((error) => ({
        status: false,
        message: `Error fetching messages: ${error.message}`,
      }));
  }

  findOne(props?: FindOneMessageDTO): PromiseResponseProps<MessageResp> {
    throw new Error('Method not implemented.');
  }

  create(props?: CreateMessageDTO): PromiseResponseProps<MessageResp> {
    const { username, message } = props?.payload || {};
    return prisma.message
      .create({
        data: { message: message!, username: username! },
        select: { message_id: false, message: true, username: true, createdAt: true, updatedAt: true },
      })
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

  update(props?: UpdateMessageDTO): PromiseResponseProps<MessageResp> {
    throw new Error('Method not implemented.');
  }

  delete(props?: DeleteMessageDTO): PromiseResponseProps<MessageResp> {
    throw new Error('Method not implemented.');
  }
}
