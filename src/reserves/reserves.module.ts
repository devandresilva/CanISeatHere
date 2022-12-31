import { AuthModule } from './../auth/auth.module';
import { SessionsModule } from 'src/sessions/sessions.module';
import { forwardRef, Module } from '@nestjs/common';
import { ReservesService } from './reserves.service';
import { ReservesController } from './reserves.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ReservesRepository } from './reserves.repository';
import { SeatsModule } from 'src/seats/seats.module';
import { Reserve } from './entities/reserve.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Reserve]),
    forwardRef(() => SessionsModule),
    SeatsModule,
    AuthModule
  ],
  controllers: [ReservesController],
  providers: [ReservesService, ReservesRepository],
  exports: [ReservesService],
})
export class ReservesModule { }
