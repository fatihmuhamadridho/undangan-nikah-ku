import { MessageRepository } from '@/@core/domain/repositories/Message.repository';

export class GetAllMessageUsecase {
  constructor(private messageRepository: MessageRepository) {}
  async execute() {
    // await this.messageRepository.create();
    return this.messageRepository.findMany();
  }
}

export class CreateMessageUsecase {
  constructor(private messageRepository: MessageRepository) {}
  execute() {
    return this.messageRepository.create();
  }
}
