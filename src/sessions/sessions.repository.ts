import { DataSource } from 'typeorm';
import { Session } from './entities/session.entity';

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

  async updateSession(id: number, updateSessionDto: UpdateSessionDto) {
    const { date, start, end } = updateSessionDto;
    let session = await this.getSessionById(id);
    session.date = date;
    session.start = start;
    session.end = end;
    return this.dataSource.getRepository(Session).save(session);
  }

  removeSession(id) {
    return this.dataSource.getRepository(Session).delete(id);
  }
}
