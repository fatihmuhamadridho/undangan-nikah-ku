import { MessageRepository } from '@/@core/domain/repositories/Message.repository';
import { PromiseResponseProps, Usecase } from '../../entities/Global';
import { CreateMessageDTO, FindManyMessageDTO, MessageResp } from '../../entities/Message';

export class GetAllMessageUsecase implements Usecase<FindManyMessageDTO, PromiseResponseProps<MessageResp[]>> {
  constructor(private messageRepository: MessageRepository) {}
  execute(props?: FindManyMessageDTO | undefined): PromiseResponseProps<MessageResp[]> {
    // await this.messageRepository.create();
    return this.messageRepository.findMany(props);
  }
}

export class CreateMessageUsecase implements Usecase<CreateMessageDTO, PromiseResponseProps<MessageResp>> {
  constructor(private messageRepository: MessageRepository) {}
  execute(props?: CreateMessageDTO | undefined): PromiseResponseProps<MessageResp> {
    return this.messageRepository.create(props);
  }
}
