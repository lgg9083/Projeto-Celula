import { Body, Controller, Post } from '@nestjs/common';
import { GroupCelulaService } from './group-celula.service';
import { CreateCelulaDto } from './dto/create-celula.dto';

@Controller('group-celula')
export class GroupCelulaController {
  constructor(private readonly groupCelulaService: GroupCelulaService) {}
  @Post()
  criarCelula(@Body() createCelula: CreateCelulaDto) {
    return this.groupCelulaService.criarCelula(createCelula);
  }
}
