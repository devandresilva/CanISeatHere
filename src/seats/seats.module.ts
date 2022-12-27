import { Module } from '@nestjs/common';
import { SeatsService } from './seats.service';
import { SeatsController } from './seats.controller';
import { SeatsRepository } from './seats.repository';
import { TypeOrmModule } from '@nestjs/typeorm/dist';

@Module({
  imports: [
    TypeOrmModule.forFeature([SeatsRepository])
  ],
  controllers: [SeatsController],
  providers: [SeatsService]
})
export class SeatsModule {}
