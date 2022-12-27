import { EntityRepository, Repository } from "typeorm";
import { Session } from "./entities/session.entity";
import { CreateSessionDto } from "./dto/create-session.dto";
import { UpdateSessionDto } from "./dto/update-session.dto";

@EntityRepository()
export class SessionReposiroty extends Repository<Session>{
  
  createSession(createSessionDto: CreateSessionDto) {
    return 'Por fazer';
  }

  getAllSessions() {
    return 'Por fazer';
  }

  getSessionById(id: number) {
    return 'Por fazer';
  }

  updateSession(id: number, updateSessionDto: UpdateSessionDto) {
    return 'Por fazer';
  }

  removeSession(id: number) {
    return 'Por fazer';
  }
}