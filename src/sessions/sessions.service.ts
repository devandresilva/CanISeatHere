import { Injectable } from '@nestjs/common';
import { CreateSessionDto } from './dto/create-session.dto';
import { UpdateSessionDto } from './dto/update-session.dto';
import { SessionReposiroty } from './sessions.repository';

@Injectable()
export class SessionsService {
  constructor(private readonly sessionsRepository : SessionReposiroty){}

  createSession(createSessionDto: CreateSessionDto) {
    return this.sessionsRepository.createSession(createSessionDto);
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
