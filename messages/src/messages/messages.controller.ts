import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateMessageDto } from './dtos/create-message.dto';

@Controller('messages')
export class MessagesController {
  @Get()
  getMessages() {
    return 'get messages';
  }

  @Post()
  postMessage(@Body() content: CreateMessageDto) {
    return content;
  }

  @Get('/:id')
  getMessage(@Param() id: number) {
    return id;
  }
}
