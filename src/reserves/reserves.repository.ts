import { Injectable } from '@nestjs/common';
import { EntityRepository, DataSource } from 'typeorm';
import { Repository } from 'typeorm/repository/Repository';
import { Reserve } from './entities/reserve.entity';

@Injectable()
export class ReservesRepository {

  constructor(private dataSource: DataSource) { }
  createReserve(seat, session, user) {
    const reserve = this.dataSource.getRepository(Reserve).create({
      seat: seat,
      session: session,
      user: user
    });
    return this.dataSource.getRepository(Reserve).save(reserve);
  }

  getAllReserves() {
    return this.dataSource.getRepository(Reserve).createQueryBuilder('reserve').getMany();
  }


  getReservesBySessionId(id) {
    return this.dataSource.getRepository(Reserve).createQueryBuilder('reserve').where('reserve.sessionId = :id', { id: id }).leftJoinAndSelect('reserve.seat', 'seat').getMany();
  }

  getReserveById(id) {
    return this.dataSource.getRepository(Reserve).findOne({ where: { id: id } })

  }

  removeReserve(id) {
    return this.dataSource.getRepository(Reserve).delete(id);
  }
}
