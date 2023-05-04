import {
  Body,
  Controller,
  Get,
  NotFoundException,
  Param,
  Post,
} from '@nestjs/common';
import { CreateMessageDto } from './dtos/create-message.dto';
import { MessagesService } from './messages.service';

@Controller('messages')
export class MessagesController {
  private readonly messagesService: MessagesService;
  constructor() {
    this.messagesService = new MessagesService();
  }

  @Get()
  async getMessages() {
    return await this.messagesService.findAll();
  }

  @Post()
  async postMessage(@Body() body: CreateMessageDto) {
    return await this.messagesService.createMessage(body.content);
  }

  @Get('/:id')
  async getMessage(@Param('id') id: number) {
    const message = await this.messagesService.findOne(id);

    if (!message) throw new NotFoundException('Not Found');

    return message;
  }
}
