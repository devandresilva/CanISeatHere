import { Module } from '@nestjs/common';
import { SeatsService } from './seats.service';
import { SeatsController } from './seats.controller';
import { SeatsRepository } from './seats.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RoomsModule } from 'src/rooms/rooms.module';
import { Seat } from './entities/seat.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Seat]), RoomsModule],
  controllers: [SeatsController],
  providers: [SeatsService, SeatsRepository],
  exports: [SeatsService],
})
export class SeatsModule { }
