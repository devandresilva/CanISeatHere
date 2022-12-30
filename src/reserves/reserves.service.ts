import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { CreateReserveDto } from './dto/create-reserve.dto';
import { UpdateReserveDto } from './dto/update-reserve.dto';
import { ReservesRepository } from './reserves.repository';
import { SessionsService } from 'src/sessions/sessions.service';
import { SeatsService } from 'src/seats/seats.service';

@Injectable()
export class ReservesService {
  constructor(
    private readonly reservesRepository: ReservesRepository,
    @Inject(forwardRef(() => SessionsService))
    private sessionService: SessionsService,
    private seatService: SeatsService,
  ) { }

  async createReserve(createReserveDto: CreateReserveDto) {
    const session = await this.sessionService.getSessionById(
      createReserveDto.sessionId,
    );
    const seat = await this.seatService.getSeatById(createReserveDto.seatId);
    const seatsOnRoom = session.room.seats;
    if (session && seat) {
      if (seatsOnRoom.find(seats => seats.id === seat.id)) {
        return this.reservesRepository.createReserve(seat, session);
      } else {
        return 'Essa cadeira não pertence a sala dessa sessão'
      }
    } else {
      return 'Sessão ou cadeira não encontrada'
    }

  }

  getReservesBySessionId(id: number) {
    return this.reservesRepository.getReservesBySessionId(id);
  }

  getAllReserves() {
    return this.reservesRepository.getAllReserves();
  }

  getReserveById(id: number) {
    return this.reservesRepository.getReserveById(id);
  }

  removeReserve(id: number) {
    return this.reservesRepository.removeReserve(id);
  }
}
