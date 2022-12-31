import { User } from './user.entity';
import { Injectable, Post, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UsersRepository } from './users.repository';
import { CreateUserDTO } from './dto/create-user.dto';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { DataSource } from 'typeorm';

@Injectable()
export class AuthService {
  constructor(
    private usersRepository: UsersRepository,
    private dataSource: DataSource,
    private jwtService: JwtService,
  ) { }

  async signUp(createUserDTO: CreateUserDTO) {
    return this.usersRepository.createUser(createUserDTO);
  }

  async signIn(createUserDTO: CreateUserDTO): Promise<{ accessToken: string }> {
    const { username, password } = createUserDTO;
    const user = await this.dataSource.getRepository(User).findOne({ where: { username } });

    if (user && (await bcrypt.compare(password, user.password))) {
      const payload = { username };
      const accessToken = this.jwtService.sign(payload);
      return { accessToken };
    } else {
      throw new UnauthorizedException('Please check your login credentials');
    }
  }
}
