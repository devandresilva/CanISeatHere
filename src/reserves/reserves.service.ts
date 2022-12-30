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
    if (session && seat) {
      if (session.room !== seat.room) {
        throw new Error('The seat does not belong to the room of the session');
      }
    }
    return this.reservesRepository.createReserve(session, seat);
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
