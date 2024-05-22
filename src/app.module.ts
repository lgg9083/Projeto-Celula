import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MembrosModule } from './membros/membros.module';
import { GroupCelularModule } from './group-celula/group-celula.module';

@Module({
  imports: [MembrosModule, GroupCelularModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
