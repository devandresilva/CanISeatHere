import { Module } from '@nestjs/common';
import { SeatsModule } from './seats/seats.module';
import { MoviesModule } from './movies/movies.module';
import { RoomsModule } from './rooms/rooms.module';
import { SessionsModule } from './sessions/sessions.module';
import { ReservesModule } from './reserves/reserves.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Room } from './rooms/entities/room.entity';
import { Movie } from './movies/entities/movie.entity';
import { Session } from './sessions/entities/session.entity';
import { Reserve } from './reserves/entities/reserve.entity';
import { Seat } from './seats/entities/seat.entity';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: null,
      database: 'senteaqui',
      entities: [Room, Movie, Session, Reserve, Seat],
      synchronize: true,
    }),
    SeatsModule,
    MoviesModule,
    RoomsModule,
    SessionsModule,
    ReservesModule,
    AuthModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
