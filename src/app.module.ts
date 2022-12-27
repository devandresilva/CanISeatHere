import { Module } from '@nestjs/common';
import { SeatsModule } from './seats/seats.module';
import { MoviesModule } from './movies/movies.module';
import { RoomsModule } from './rooms/rooms.module';
import { SessionsModule } from './sessions/sessions.module';
import { ReservesModule } from './reserves/reserves.module';

@Module({
  imports: [
    SeatsModule, 
    MoviesModule, 
    RoomsModule, 
    SessionsModule, 
    ReservesModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
