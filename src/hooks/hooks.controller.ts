import { Body, Controller, Post, Query, Response } from '@nestjs/common';
import { HooksService } from './hooks.service';
@Controller('hooks')
export class HooksController {
  constructor(private readonly hooksService: HooksService) {}

  @Post()
  pushMessage(@Query() query, @Body() body, @Response() res) {
    return this.hooksService.pushCommitMessage(query, body, res);
  }
}
