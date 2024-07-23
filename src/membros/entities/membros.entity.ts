import { celula } from 'src/group-celula/entities/celula.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
Entity();
export class membros {
  @PrimaryGeneratedColumn('increment', { name: 'id_membro' })
  idMembro: number;

  @Column({ type: 'varchar', length: 255, nullable: true })
  nome: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  endereco: string;

  @Column('varchar', { length: 50 })
  bairro: string;

  @Column('varchar')
  Batismo_data: Date;

  @Column('varchar')
  data_de_nascimento: Date;

  @Column('varchar')
  telefone: string;

  @Column('varchar')
  cidade: string;

  @ManyToOne(() => celula, (celula) => celula.membros)
  celula: celula;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;

  @Column({ type: 'timestamp', nullable: true })
  updatedAt: Date;
}
