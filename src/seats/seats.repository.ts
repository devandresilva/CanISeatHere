import { Injectable } from '@nestjs/common';
import { EntityRepository, Repository, DataSource } from 'typeorm';
import { CreateSeatDto } from './dto/create-seat.dto';
import { UpdateSeatDto } from './dto/update-seat.dto';
import { Seat } from './entities/seat.entity';


@Injectable()
export class SeatsRepository {
  constructor(private dataSource: DataSource) { }
  createSeat(room) {
    const seat = this.dataSource.getRepository(Seat).create({ room: room });
    return this.dataSource.getRepository(Seat).save(seat);
  }

  getAllSeats() {
    return this.dataSource.getRepository(Seat).createQueryBuilder('seat').getMany();
  }

  getSeatById(id) {
    return this.dataSource.getRepository(Seat).findOne(id);
  }

  removeSeat(id) {
    return this.dataSource.getRepository(Seat).delete(id);
  }
}
