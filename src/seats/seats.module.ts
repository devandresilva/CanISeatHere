import { Module } from '@nestjs/common';
import { SeatsService } from './seats.service';
import { SeatsController } from './seats.controller';
import { SeatsRepository } from './seats.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RoomsModule } from 'src/rooms/rooms.module';

@Module({
  imports: [TypeOrmModule.forFeature([SeatsRepository]), RoomsModule],
  controllers: [SeatsController],
  providers: [SeatsService],
})
export class SeatsModule {}
