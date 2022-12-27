import { Session } from 'src/sessions/entities/session.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
@Entity()
export class Movie {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  name: string;
  @Column()
  synopsis: string;
  @Column()
  exhibitionDate: Date;

  @OneToMany(type => Session, session => session.movie)
  session: Session[];
}
