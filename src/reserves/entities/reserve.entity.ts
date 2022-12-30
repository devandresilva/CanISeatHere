import { Seat } from 'src/seats/entities/seat.entity';
import { Session } from 'src/sessions/entities/session.entity';
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
@Entity()
export class Reserve {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToMany(() => Session, (session) => session.id)
  session: Session;

  @OneToMany(() => Seat, (seat) => seat.id, { eager: true })
  seat: Seat;
}
