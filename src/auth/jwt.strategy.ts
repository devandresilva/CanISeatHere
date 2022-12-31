import { User } from './user.entity';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy, ExtractJwt } from 'passport-jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { UsersRepository } from './users.repository';
import { DataSource } from 'typeorm';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(
    private dataSource: DataSource,
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: 'antonio',
    });
  }

  async validate(payload: { username: string }) {
    const { username } = payload;
    const user = await this.dataSource.getRepository(User).findOne({ where: { username } });
    if (!user) {
      throw new UnauthorizedException();
    }
  }
}
