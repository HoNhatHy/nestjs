import { MessagesRepository } from './messages.repository';

export class MessagesService {
  private readonly messagesRepo: MessagesRepository;

  constructor() {
    this.messagesRepo = new MessagesRepository();
  }

  async findOne(id: number) {
    const message = await this.messagesRepo.findOne(id);

    return message;
  }

  async findAll() {
    return await this.messagesRepo.findAll();
  }

  async createMessage(content: string) {
    return this.messagesRepo.create(content);
  }
}
