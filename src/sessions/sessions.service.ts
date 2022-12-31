import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { CreateSessionDto } from './dto/create-session.dto';
import { UpdateSessionDto } from './dto/update-session.dto';
import { SessionRepository } from './sessions.repository';
import { MoviesService } from 'src/movies/movies.service';
import { RoomsService } from 'src/rooms/rooms.service';
import { ReservesService } from 'src/reserves/reserves.service';

@Injectable()
export class SessionsService {
  constructor(
    private sessionsRepository: SessionRepository,
    @Inject(forwardRef(() => MoviesService))
    private movieService: MoviesService,
    private roomService: RoomsService,
    private reserveService: ReservesService,
  ) { }

  async createSession(createSessionDto: CreateSessionDto) {
    const movie = await this.movieService.getMovieById(createSessionDto.movieId);
    const room = await this.roomService.getRoomById(createSessionDto.roomId);
    const { date, start, end } = createSessionDto;
    return this.sessionsRepository.createSession(date, start, end, movie, room);
  }

  async getAllSeatsAvaliableBySessionId(id) {
    const session = await this.getSessionById(id);
    const room = await this.roomService.getRoomById(session.room.id);
    const reserves = await this.reserveService.getAllReserves();
    console.log(reserves);
    console.log(room)
    console.log(room.seats);
    const disponiblesSeats = room.seats.filter((seat) => {
      return
    });
  }

  getAllSessions() {
    return this.sessionsRepository.getAllSessions();
  }

  getSessionById(id: number) {
    return this.sessionsRepository.getSessionById(id);
  }

  updateSession(id: number, updateSessionDto: UpdateSessionDto) {
    return this.sessionsRepository.updateSession(id, updateSessionDto);
  }

  removeSession(id: number) {
    return this.sessionsRepository.removeSession(id);
  }
}
