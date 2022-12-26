import { Module } from '@nestjs/common';
import { SeatsModule } from './seats/seats.module';
import { MoviesModule } from './movies/movies.module';
import { RoomsModule } from './rooms/rooms.module';

@Module({
  imports: [SeatsModule, MoviesModule, RoomsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
