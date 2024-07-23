import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MembrosModule } from './membros/membros.module';
import { GroupCelulaModule } from './group-celula/group-celula.module';
import { DatabaseModule } from './config/database';

@Module({
  imports: [
    DatabaseModule,  // Importe o módulo de banco de dados aqui
    MembrosModule,
    GroupCelulaModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
