import { EntityRepository, Repository } from 'typeorm';
import { Session } from './entities/session.entity';
import { CreateSessionDto } from './dto/create-session.dto';
import { UpdateSessionDto } from './dto/update-session.dto';

@EntityRepository()
export class SessionRepository extends Repository<Session> {
  createSession(date, start, end, movie, room) {
    const session = this.create({ date, start, end, movie, room });
    return this.save(session);
  }

  getAllSessions() {
    return this.createQueryBuilder('session').getMany();
  }

  getSessionById(id) {
    return this.findOne(id);
  }

  updateSession(id: number, updateSessionDto: UpdateSessionDto) {
    return '';
  }

  removeSession(id) {
    this.delete(id);
  }
}
