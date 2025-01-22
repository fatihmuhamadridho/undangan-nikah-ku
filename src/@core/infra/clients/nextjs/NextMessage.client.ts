/* eslint-disable @typescript-eslint/no-explicit-any */

import { PrismaMessageAdapter } from '@/@core/infra/adapters/prisma/PrismaMessage.adapter';
import {
  CreateMessageUsecase,
  GetAllMessageUsecase,
} from '@/@core/domain/usecases/message/Message.usecase';
import type { NextApiRequest, NextApiResponse } from 'next';

const prismaMessageAdapter = new PrismaMessageAdapter();
const getAllMessageUsecase = new GetAllMessageUsecase(prismaMessageAdapter);
const createMessageUsecase = new CreateMessageUsecase(prismaMessageAdapter);

export async function NextMessageClient(req: NextApiRequest, res: NextApiResponse<any>) {
  switch (req.method) {
    case 'POST':
      try {
        const response = await createMessageUsecase.execute();
        res.status(200).json(response);
      } catch (error) {
        res.status(500).json({ status: false, error });
      }
    default:
      try {
        const response = await getAllMessageUsecase.execute();
        res.status(200).json(response);
      } catch (error) {
        res.status(500).json({ status: false, error });
      }
  }
}
