import {
    IsDateString,
    IsEmail,
    IsNotEmpty,
    IsOptional,
    IsString,
  } from 'class-validator';
  
  export class CreateCelulaDto {
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
    celula_perfil: string;
  
    @IsOptional()
    @IsString()
    Lider: string;
  
    @IsNotEmpty()
    @IsEmail()
    Lider_em_treinameto: string;
  
   
  }
  