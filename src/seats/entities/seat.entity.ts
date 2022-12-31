import { IsInt } from 'class-validator';
import { Reserve } from 'src/reserves/entities/reserve.entity';
import { Room } from 'src/rooms/entities/room.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany } from 'typeorm';
@Entity()
export class Seat {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  @IsInt()
  seatNumber: number

  @ManyToOne(type => Room, room => room.seats)
  room: Room;

  @OneToMany(type => Reserve, reserve => reserve.seat)
  reserve: Reserve[];
}
