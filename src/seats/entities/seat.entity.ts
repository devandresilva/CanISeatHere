import { Room } from 'src/rooms/entities/room.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
@Entity()
export class Seat {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(type => Room, room => room.seats, { eager: true })
  room: Room;
}
