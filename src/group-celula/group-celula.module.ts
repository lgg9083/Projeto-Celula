import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { celula } from './entities/celula.entity'; // Certifique-se de que o caminho está correto
import { GroupCelulaService } from './group-celula.service';
import { GroupCelulaController } from './group-celula.controller';

@Module({
    imports: [TypeOrmModule.forFeature([celula])],
    providers: [GroupCelulaService],
    controllers: [GroupCelulaController],
    exports: [GroupCelulaService],
})
export class GroupCelulaModule {}
