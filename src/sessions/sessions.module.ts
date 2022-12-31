import { MoviesModule } from './../movies/movies.module';
import { Module } from '@nestjs/common';
import { SessionsService } from './sessions.service';
import { SessionsController } from './sessions.controller';
import { TypeOrmModule } from '@nestjs/typeorm/dist/typeorm.module';
import { SessionRepository } from './sessions.repository';
import { RoomsModule } from 'src/rooms/rooms.module';
import { ReservesModule } from 'src/reserves/reserves.module';
import { Session } from './entities/session.entity';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Session]),
    MoviesModule,
    RoomsModule,
    ReservesModule,
    AuthModule
  ],
  controllers: [SessionsController],
  providers: [SessionsService, SessionRepository],
  exports: [SessionsService],
})
export class SessionsModule { }
