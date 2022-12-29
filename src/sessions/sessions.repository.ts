import { EntityRepository, Repository, DataSource } from 'typeorm';
import { Session } from './entities/session.entity';
import { CreateSessionDto } from './dto/create-session.dto';
import { UpdateSessionDto } from './dto/update-session.dto';
import { Injectable } from '@nestjs/common';

@Injectable()
export class SessionRepository {
  constructor(private dataSource: DataSource) { }
  createSession(date, start, end, movie, room) {
    const session = this.dataSource.getRepository(Session).create({ date, start, end, movie, room });
    return this.dataSource.getRepository(Session).save(session);
  }

  getAllSessions() {
    return this.dataSource.getRepository(Session).createQueryBuilder('session').getMany();
  }

  getSessionById(id) {
    return this.dataSource.getRepository(Session).findOne({ where: { id: id } });
  }

  updateSession(id: number, updateSessionDto: UpdateSessionDto) {
    return '';
  }

  removeSession(id) {
    this.dataSource.getRepository(Session).delete(id);
  }
}
