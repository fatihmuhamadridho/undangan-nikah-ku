/* eslint-disable @typescript-eslint/no-explicit-any */
import { CreateMessageUsecase, GetAllMessageUsecase } from '@/@core/domain/usecases/message/Message.usecase';
import useSWR, { mutate } from 'swr';
import { HttpMessageAdapter } from '../../adapters/http/HttpMessage.adapter';
import { CreateMessageDTO } from '@/@core/domain/entities/Message';

const httpMessageAdapter = new HttpMessageAdapter();
const getAllMessageUsecase = new GetAllMessageUsecase(httpMessageAdapter);
const createMessageUsecase = new CreateMessageUsecase(httpMessageAdapter);

export const useGetAllMessageSWR = () => {
  const fetcher = async () => await getAllMessageUsecase.execute();
  const { data, error, isLoading } = useSWR('/messages', fetcher);
  return { data, error, isLoading };
};

export const createMessageSWR = async (payload: CreateMessageDTO['payload']) => {
  try {
    const response = await createMessageUsecase.execute({ payload: payload });
    mutate('/messages');
    return response;
  } catch (error: any) {
    return error;
  }
};
