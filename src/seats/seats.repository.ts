import { Injectable } from '@nestjs/common';
import { DataSource } from 'typeorm';
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
    return this.dataSource.getRepository(Seat).findOne({ where: { id: id } });
  }

  removeSeat(id) {
    return this.dataSource.getRepository(Seat).delete(id);
  }
}
