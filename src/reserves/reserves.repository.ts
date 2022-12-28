import { EntityRepository } from 'typeorm';
import { Repository } from 'typeorm/repository/Repository';
import { Reserve } from './entities/reserve.entity';
import { CreateReserveDto } from './dto/create-reserve.dto';
import { UpdateReserveDto } from './dto/update-reserve.dto';

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
    return 'por fazer';
  }

  getReserveById(id: number) {
    return 'por fazer';
  }

  updateReserve(id: number, updateReserveDto: UpdateReserveDto) {
    return 'por fazer';
  }

  removeReserve(id: number) {
    return 'por fazer';
  }
}
