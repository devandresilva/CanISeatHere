import { Movie } from 'src/movies/entities/movie.entity';
import { Room } from 'src/rooms/entities/room.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
@Entity()
export class Session {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  date: Date;
  @Column()
  start: Date;
  @Column()
  end: Date;

  @ManyToOne(type => Movie, movie => movie.session)
  movie: Movie;

  @ManyToOne(type => Room, room => room.session)
  room: Room;
}
