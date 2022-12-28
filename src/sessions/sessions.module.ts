import { Module } from '@nestjs/common';
import { SessionsService } from './sessions.service';
import { SessionsController } from './sessions.controller';
import { TypeOrmModule } from '@nestjs/typeorm/dist/typeorm.module';
import { SessionReposiroty } from './sessions.repository';
import { MoviesService } from 'src/movies/movies.service';
import { RoomsService } from 'src/rooms/rooms.service';
import { ReservesService } from 'src/reserves/reserves.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([SessionReposiroty]),
    MoviesService,
    RoomsService,
    ReservesService,
  ],
  controllers: [SessionsController],
  providers: [SessionsService],
  exports: [SessionsService],
})
export class SessionsModule {}
