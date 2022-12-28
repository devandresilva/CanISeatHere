import { EntityRepository, Repository } from 'typeorm';
import { Session } from './entities/session.entity';
import { CreateSessionDto } from './dto/create-session.dto';
import { UpdateSessionDto } from './dto/update-session.dto';

@EntityRepository()
export class SessionReposiroty extends Repository<Session> {
  createSession(date, start, end, movie, room) {
    const session = this.create({ date, start, end, movie, room });
    return this.save(session);
  }

  async getSeatsDisponibles(sessionId) {
    const session = await this.getSessionById(sessionId);
    const room = session.room;
    const seats = await room.seats;
    // const seatsDisponibles = seats.filter();
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
