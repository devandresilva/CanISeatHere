import { Seat } from './../../seats/entities/seat.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany, JoinTable } from 'typeorm';
import { Session } from 'src/sessions/entities/session.entity';

@Entity()
export class Room {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  name: string;

  @OneToMany((type) => Seat, (seat) => seat.room, { eager: true })
  seats: Seat[];

  @OneToMany((type) => Session, (session) => session.room)
  session: Session[];
}
