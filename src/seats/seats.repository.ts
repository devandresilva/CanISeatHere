import { Injectable } from '@nestjs/common';
import { DataSource } from 'typeorm';
import { Seat } from './entities/seat.entity';


@Injectable()
export class SeatsRepository {
  constructor(private dataSource: DataSource) { }
  createSeat(room, seatNumber) {
    const seat = this.dataSource.getRepository(Seat).create({ room: room, seatNumber: seatNumber });
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
