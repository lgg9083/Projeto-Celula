import { Body, Controller, Post, Req } from '@nestjs/common';
import { MembrosService } from './membros.service';
import { CreateMemborDto } from './dto/create-membro.dto';

@Controller('membros')
export class MembrosController {
    constructor( private readonly membrosService : MembrosService){}

    @Post()
    criarMembro (@Body() createMembro: CreateMemborDto){
        return this.membrosService.criatMembro(createMembro)
    }
}
