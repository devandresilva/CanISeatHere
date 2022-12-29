import { SessionsModule } from './../sessions/sessions.module';
import { Module } from '@nestjs/common';
import { ReservesService } from './reserves.service';
import { ReservesController } from './reserves.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ReservesRepository } from './reserves.repository';
import { SeatsModule } from 'src/seats/seats.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([ReservesRepository]),
    SessionsModule,
    SeatsModule,
  ],
  controllers: [ReservesController],
  providers: [ReservesService],
  exports: [ReservesModule],
})
export class ReservesModule { }
