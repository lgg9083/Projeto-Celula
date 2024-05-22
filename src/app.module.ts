import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MembrosModule } from './membros/membros.module';

@Module({
  imports: [MembrosModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
