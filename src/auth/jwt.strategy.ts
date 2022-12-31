import { User } from './user.entity';
import { Inject, Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy, ExtractJwt } from 'passport-jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { UsersRepository } from './users.repository';
import { DataSource } from 'typeorm';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(
    @Inject(UsersRepository)
    private usersRepository: UsersRepository,
    private dataSource: DataSource,
  ) {
    super({
      secretOrKey: 'antonio',
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    });
  }

  async validate(payload: { username: string }) {
    const { username } = payload;
    console.log(username);
    const user = await this.dataSource.getRepository(User).findOne({ where: { username } });
    console.log(user);
    if (!user) {
      throw new UnauthorizedException();
    }
    return user;
  }
}
