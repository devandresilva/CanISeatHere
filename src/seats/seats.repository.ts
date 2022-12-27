import { EntityRepository, Repository } from "typeorm";
import { CreateSeatDto } from "./dto/create-seat.dto";
import { UpdateSeatDto } from "./dto/update-seat.dto";
import { Seat } from "./entities/seat.entity";

@EntityRepository(Seat)
export class SeatsRepository extends Repository<Seat> {

  createSeat(createSeatDto: CreateSeatDto) {
    return "por fazer";
  }

  getAllSeats() {
    return "por fazer";
  }

  getSeatById(id: number) {
    return "por fazer";
  }

  updateSeat(id: number, updateSeatDto: UpdateSeatDto) {
    return "por fazer";
  }

  removeSeat(id: number) {
    return "por fazer";
  }

}