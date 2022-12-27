import { Module } from '@nestjs/common';
import { RoomsService } from './rooms.service';
import { RoomsController } from './rooms.controller';
import { RoomsRepository } from './rooms.repository';
import { TypeOrmModule } from '@nestjs/typeorm/dist';

@Module({
  imports: [
    TypeOrmModule.forFeature([RoomsRepository])
  ],
  controllers: [RoomsController],
  providers: [RoomsService]
})
export class RoomsModule {}
