import { EntityRepository } from 'typeorm';
import { Repository } from 'typeorm/repository/Repository';
import { Reserve } from './entities/reserve.entity';

@EntityRepository()
export class ReservesRepository extends Repository<Reserve> {
  createReserve(seat, session) {
    const reserve = this.create({
      seat: seat,
      session: session,
    });
    return this.save(reserve);
  }

  getAllReserves() {
    return this.createQueryBuilder('reserve').getMany();
  }

  getReserveById(id) {
    return this.findOne(id);
  }

  removeReserve(id) {
    return this.delete(id);
  }
}
