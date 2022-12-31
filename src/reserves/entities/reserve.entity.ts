import { Seat } from 'src/seats/entities/seat.entity';
import { Session } from 'src/sessions/entities/session.entity';
import { Entity, PrimaryGeneratedColumn, Column, OneToMany, JoinColumn, ManyToOne } from 'typeorm';
@Entity()
export class Reserve {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(type => Session, session => session.reserve, { eager: true })
  session: Session;

  @ManyToOne(type => Seat, seat => seat.reserve, { eager: true })
  seat: Seat;
}
