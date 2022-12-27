import { Injectable } from '@nestjs/common';
import { CreateSeatDto } from './dto/create-seat.dto';
import { UpdateSeatDto } from './dto/update-seat.dto';
import { SeatsRepository } from './seats.repository';

@Injectable()
export class SeatsService {
  constructor(private readonly seatsRepository : SeatsRepository){}

  createSeat(createSeatDto: CreateSeatDto) {
    return this.seatsRepository.createSeat(createSeatDto);
  }

  getAllSeats() {
    return this.seatsRepository.getAllSeats();
  }

  getSeatById(id: number) {
    return this.seatsRepository.getSeatById(id);
  }

  updateSeat(id: number, updateSeatDto: UpdateSeatDto) {
    return this.seatsRepository.updateSeat(id, updateSeatDto);
  }

  removeSeat(id: number) {
    return this.seatsRepository.removeSeat(id);
  }
}
