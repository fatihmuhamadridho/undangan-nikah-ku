/* eslint-disable @typescript-eslint/no-explicit-any */

import { PrismaMessageAdapter } from '@/@core/infra/adapters/prisma/PrismaMessage.adapter';
import { CreateMessageUsecase, GetAllMessageUsecase } from '@/@core/domain/usecases/message/Message.usecase';
import type { NextApiRequest, NextApiResponse } from 'next';
import { CreateMessageDTO, FindManyMessageDTO } from '@/@core/domain/entities/Message';

const prismaMessageAdapter = new PrismaMessageAdapter();
const getAllMessageUsecase = new GetAllMessageUsecase(prismaMessageAdapter);
const createMessageUsecase = new CreateMessageUsecase(prismaMessageAdapter);

export async function NextMessageClient(req: NextApiRequest, res: NextApiResponse<any>) {
  switch (req.method) {
    case 'POST':
      try {
        const payload: CreateMessageDTO['payload'] = req.body;
        const response = await createMessageUsecase.execute({ payload: payload });
        res.status(200).json(response);
      } catch (error) {
        res.status(500).json({ status: false, error });
      }
    default:
      try {
        const { page = 1, limit = 10 } = (req.query as FindManyMessageDTO['query']) || {};
        const query: FindManyMessageDTO['query'] = { page: Number(page), limit: Number(limit) };
        const response = await getAllMessageUsecase.execute({ query: query });
        res.status(200).json(response);
      } catch (error) {
        res.status(500).json({ status: false, error });
      }
  }
}
