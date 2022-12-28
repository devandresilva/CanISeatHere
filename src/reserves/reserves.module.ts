import { Module } from '@nestjs/common';
import { ReservesService } from './reserves.service';
import { ReservesController } from './reserves.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ReservesRepository } from './reserves.repository';
import { SessionsService } from 'src/sessions/sessions.service';
import { SeatsService } from 'src/seats/seats.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([ReservesRepository]),
    SessionsService,
    SeatsService,
  ],
  controllers: [ReservesController],
  providers: [ReservesService],
})
export class ReservesModule {}
