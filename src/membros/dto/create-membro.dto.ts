import {
  IsDateString,
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsString,
} from 'class-validator';

export class CreateMemborDto {
  @IsNotEmpty()
  @IsString()
  nome: string;

  @IsNotEmpty()
  @IsDateString()
  endereco: string;

  @IsNotEmpty()
  @IsString()
  bairro: string;

  @IsOptional()
  @IsString()
  Batismo_data: string;

  @IsOptional()
  @IsString()
  data_de_nascimento: string;

  @IsNotEmpty()
  @IsEmail()
  telefone: string;

  @IsNotEmpty()
  @IsString()
  cidade: string;
}
