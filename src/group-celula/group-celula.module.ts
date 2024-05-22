import { Module } from '@nestjs/common';
import { GroupCelulaController } from './group-celula.controller';
import { GroupCelulaService } from './group-celula.service';

@Module({
  controllers: [GroupCelulaController],
  providers: [GroupCelulaService]
})
export class GroupCelularModule {}
