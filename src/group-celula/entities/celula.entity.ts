import { membros } from 'src/membros/entities/membros.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

Entity();
export class celula {
  @PrimaryGeneratedColumn('increment', { name: 'id_membro' })
  idMembro: number;

  @Column({ type: 'varchar', length: 255, nullable: true })
  nome: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  endereco: string;

  @Column('varchar', { length: 50 })
  bairro: string;

  @Column('varchar')
  celula_perfil: Date;

  @OneToMany(() => membros, (membros) => membros.celula)
  membros: membros[];

  @Column('varchar')
  lider: Date;

  @Column('varchar')
  lider_em_treinamento: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;

  @Column({ type: 'timestamp', nullable: true })
  updatedAt: Date;
}
