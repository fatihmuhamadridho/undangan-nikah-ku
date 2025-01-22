import { PromiseResponseProps } from '../entities/Global';
import {
  CreateMessageDTO,
  DeleteMessageDTO,
  FindManyMessageDTO,
  FindOneMessageDTO,
  MessageResp,
  UpdateMessageDTO,
} from '../entities/Message';

export abstract class MessageRepository {
  abstract findMany(props?: FindManyMessageDTO): PromiseResponseProps<MessageResp[]>;
  abstract findOne(props?: FindOneMessageDTO): PromiseResponseProps<MessageResp>;
  abstract create(props?: CreateMessageDTO): PromiseResponseProps<MessageResp>;
  abstract update(props?: UpdateMessageDTO): PromiseResponseProps<MessageResp>;
  abstract delete(props?: DeleteMessageDTO): PromiseResponseProps<MessageResp>;
}
