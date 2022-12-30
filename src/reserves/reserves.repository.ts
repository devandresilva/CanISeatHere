import { Injectable } from '@nestjs/common';
import { EntityRepository, DataSource } from 'typeorm';
import { Repository } from 'typeorm/repository/Repository';
import { Reserve } from './entities/reserve.entity';

@Injectable()
export class ReservesRepository {

  constructor(private dataSource: DataSource) { }
  createReserve(seat, session) {
    const reserve = this.dataSource.getRepository(Reserve).create({
      seat: seat,
      session: session,
    });
    return this.dataSource.getRepository(Reserve).save(reserve);
  }

  getAllReserves() {
    return this.dataSource.getRepository(Reserve).createQueryBuilder('reserve').getMany();
  }


  getReservesBySessionId(id) {
    return this.dataSource.getRepository(Reserve).find({ where: { session: id } });
  }

  getReserveById(id) {
    return this.dataSource.getRepository(Reserve).createQueryBuilder('reserve').where('reserve.id = :id', { id: id }).getOne();
  }

  removeReserve(id) {
    return this.dataSource.getRepository(Reserve).delete(id);
  }
}
