import { PrismaMessageAdapter } from '@/@core/infra/adapters/prisma/PrismaMessage.adapter';
import { CreateMessageUsecase, GetAllMessageUsecase } from '@/@core/domain/usecases/message/Message.usecase';
import type { NextApiRequest, NextApiResponse } from 'next';
import { CreateMessageDTO, FindManyMessageDTO, MessageResp } from '@/@core/domain/entities/Message';
import { ResponseProps } from '@/@core/domain/entities/Global';
import { RateLimiter } from '../../@utils/rateLimiter';

const prismaMessageAdapter = new PrismaMessageAdapter();
const getAllMessageUsecase = new GetAllMessageUsecase(prismaMessageAdapter);
const createMessageUsecase = new CreateMessageUsecase(prismaMessageAdapter);

const getAllMessageUsecaseRateLimiter = new RateLimiter({ maxRequestsPerMinute: 100 });
const createMessageUsecaseRateLimiter = new RateLimiter({ maxRequestsPerMinute: 5 });

export async function NextMessage(req: NextApiRequest, res: NextApiResponse) {
  switch (req.method) {
    case 'POST':
      createMessageUsecaseRateLimiter.apply(POSTNextMessage)(req, res);
      break;
    default:
      getAllMessageUsecaseRateLimiter.apply(GETNextMessage)(req, res);
      break;
  }
}

async function GETNextMessage(req: NextApiRequest, res: NextApiResponse<ResponseProps<MessageResp[]>>) {
  try {
    const { page = 1, limit = 1000, orderBy, orderType } = (req.query as FindManyMessageDTO['query']) || {};
    const query: FindManyMessageDTO['query'] = {
      page: Number(page),
      limit: Number(limit),
      orderBy: orderBy,
      orderType,
    };
    const response = await getAllMessageUsecase.execute({ query: query });
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ status: false, error });
  }
}

async function POSTNextMessage(req: NextApiRequest, res: NextApiResponse<ResponseProps<MessageResp>>) {
  try {
    const payload: CreateMessageDTO['payload'] = req.body;
    const response = await createMessageUsecase.execute({ payload: payload });
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ status: false, error });
  }
}
