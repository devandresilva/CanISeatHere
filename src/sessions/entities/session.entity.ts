import { Movie } from 'src/movies/entities/movie.entity';
import { Room } from 'src/rooms/entities/room.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
@Entity()
export class Session {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  date: string;
  @Column()
  start: string;
  @Column()
  end: string;

  @ManyToOne(type => Movie, movie => movie.session, { eager: true })
  movie: Movie;

  @ManyToOne(type => Room, room => room.session, { eager: true })
  room: Room;
}
