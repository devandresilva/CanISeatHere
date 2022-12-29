import { SessionsModule } from './../sessions/sessions.module';
import { Module } from '@nestjs/common';
import { ReservesService } from './reserves.service';
import { ReservesController } from './reserves.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ReservesRepository } from './reserves.repository';
import { SeatsModule } from 'src/seats/seats.module';
import { Reserve } from './entities/reserve.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Reserve]),
    SessionsModule,
    SeatsModule,
  ],
  controllers: [ReservesController],
  providers: [ReservesService, ReservesRepository],
  exports: [ReservesService],
})
export class ReservesModule { }
