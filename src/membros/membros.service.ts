import {
  Injectable,
  InternalServerErrorException,
  Logger,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { membros } from './entities/membros.entity';
import { Repository } from 'typeorm';
import { CreateMemborDto } from './dto/create-membro.dto';
@Injectable()
export class MembrosService {
  constructor(
    @InjectRepository(membros)
    private readonly Membrorespository: Repository<membros>,
  ) {}

  private readonly logger = new Logger(MembrosService.name);
  async findByname(nome: string): Promise<membros> {
    try {
      return await this.Membrorespository.findOne({ where: { nome } });
    } catch (error) {
      this.logger.error('Nome não encontrado: ', error);
      throw error;
    }
  }
  async criatMembro(data: CreateMemborDto) {
    try {
      const novOMembro = this.Membrorespository.create({
        ...data,
        createdAt: new Date(),
      });
      await this.Membrorespository.save(novOMembro);
    } catch (error) {
      throw new InternalServerErrorException('Erro ao Registrar membro');
    }
  }
}
