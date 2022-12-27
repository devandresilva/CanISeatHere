import { Module } from '@nestjs/common';
import { ReservesService } from './reserves.service';
import { ReservesController } from './reserves.controller';
import { TypeOrmModule } from '@nestjs/typeorm/dist/typeorm.module';
import { ReservesReposiroty } from './reserves.repository';

@Module({
  imports: [
    TypeOrmModule.forFeature([ReservesReposiroty])
  ],
  controllers: [ReservesController],
  providers: [ReservesService]
})
export class ReservesModule {}
