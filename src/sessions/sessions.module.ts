import { MoviesModule } from './../movies/movies.module';
import { Module } from '@nestjs/common';
import { SessionsService } from './sessions.service';
import { SessionsController } from './sessions.controller';
import { TypeOrmModule } from '@nestjs/typeorm/dist/typeorm.module';
import { SessionRepository } from './sessions.repository';
import { RoomsModule } from 'src/rooms/rooms.module';
import { ReservesModule } from 'src/reserves/reserves.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([SessionRepository]),
    MoviesModule,
    RoomsModule,
    ReservesModule,
  ],
  controllers: [SessionsController],
  providers: [SessionsService],
  exports: [SessionsService],
})
export class SessionsModule { }
