import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Opiniones {
  @PrimaryGeneratedColumn()
  id: number;
  
  @Column()
  comentario: string;
}