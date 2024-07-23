import { Module } from '@nestjs/common';
import { MembrosController } from './membros.controller';
import { MembrosService } from './membros.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { membros } from './entities/membros.entity';

@Module({
  imports: [TypeOrmModule.forFeature([membros])],
  controllers: [MembrosController],
  providers: [MembrosService],
})
export class MembrosModule {}
