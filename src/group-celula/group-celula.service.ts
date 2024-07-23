import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { celula } from './entities/celula.entity';
import { Repository } from 'typeorm';
import { CreateCelulaDto } from './dto/create-celula.dto';

@Injectable()
export class GroupCelulaService {
  constructor(
    @InjectRepository(celula)
    private readonly celulaRepository: Repository<celula>,
  ) {}

  async criarCelula(data: CreateCelulaDto) {
    console.log(data);
    try {
      const criarCelula = this.celulaRepository.create({
        ...data,
        createdAt: new Date(),
      });
      console.log('aqui', criarCelula);
      await this.celulaRepository.save(criarCelula);
    } catch (error) {
      console.log('aqui esta o erro', error);
      throw new InternalServerErrorException('Erro ao Registrar celula.');
    }
  }
}
