import { Module } from '@nestjs/common';
import { ReservesService } from './reserves.service';
import { ReservesController } from './reserves.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ReservesRepository } from './reserves.repository';

@Module({
  imports: [
    TypeOrmModule.forFeature([ReservesRepository])
  ],
  controllers: [ReservesController],
  providers: [ReservesService]
})
export class ReservesModule { }
