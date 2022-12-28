import { Module } from '@nestjs/common';
import { SessionsService } from './sessions.service';
import { SessionsController } from './sessions.controller';
import { TypeOrmModule } from '@nestjs/typeorm/dist/typeorm.module';
import { SessionReposiroty } from './sessions.repository';
import { MoviesService } from 'src/movies/movies.service';
import { RoomsService } from 'src/rooms/rooms.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([SessionReposiroty]),
    MoviesService,
    RoomsService,
  ],
  controllers: [SessionsController],
  providers: [SessionsService],
  exports: [SessionsService],
})
export class SessionsModule {}
