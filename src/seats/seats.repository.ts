import { EntityRepository, Repository } from 'typeorm';
import { CreateSeatDto } from './dto/create-seat.dto';
import { UpdateSeatDto } from './dto/update-seat.dto';
import { Seat } from './entities/seat.entity';

@EntityRepository(Seat)
export class SeatsRepository extends Repository<Seat> {
  createSeat(room) {
    const seat = this.create({ room: room });
    return this.save(seat);
  }

  getAllSeats() {
    return this.createQueryBuilder('seat').getMany();
  }

  getSeatById(id) {
    return this.findOne(id);
  }

  removeSeat(id: number) {
    return;
  }
}
