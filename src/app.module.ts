import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HooksController } from './hooks/hooks.controller';
import { HooksService } from './hooks/hooks.service';

@Module({
  imports: [],
  controllers: [AppController, HooksController],
  providers: [AppService, HooksService]
})
export class AppModule {}
