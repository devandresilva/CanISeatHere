import { Injectable } from '@nestjs/common';
import { CreateSessionDto } from './dto/create-session.dto';
import { UpdateSessionDto } from './dto/update-session.dto';
import { SessionReposiroty } from './sessions.repository';
import { MoviesService } from 'src/movies/movies.service';
import { RoomsService } from 'src/rooms/rooms.service';

@Injectable()
export class SessionsService {
  constructor(
    private readonly sessionsRepository: SessionReposiroty,
    private movieService: MoviesService,
    private roomService: RoomsService,
  ) {}

  createSession(createSessionDto: CreateSessionDto) {
    const movie = this.movieService.getMovieById(createSessionDto.movieId);
    const room = this.roomService.getRoomById(createSessionDto.roomId);
    const { date, start, end } = createSessionDto;
    return this.sessionsRepository.createSession(date, start, end, movie, room);
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
