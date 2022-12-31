import { Injectable } from '@nestjs/common';
import { CreateSeatDto } from './dto/create-seat.dto';
import { UpdateSeatDto } from './dto/update-seat.dto';
import { SeatsRepository } from './seats.repository';
import { RoomsService } from 'src/rooms/rooms.service';

@Injectable()
export class SeatsService {
  constructor(
    private seatsRepository: SeatsRepository,
    private roomsService: RoomsService,
  ) { }

  async createSeat(createSeatDto: CreateSeatDto) {
    const room = await this.roomsService.getRoomById(createSeatDto.roomId);
    return this.seatsRepository.createSeat(room, createSeatDto.seatNumber);
  }

  getAllSeats() {
    return this.seatsRepository.getAllSeats();
  }

  getSeatById(id: number) {
    return this.seatsRepository.getSeatById(id);
  }

  removeSeat(id: number) {
    return this.seatsRepository.removeSeat(id);
  }
}
