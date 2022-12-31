import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersRepository } from './users.repository';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './jwt.strategy';
import { User } from './user.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([User]),
    PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.register({ secret: 'antonio', signOptions: { expiresIn: 3600 } }),
  ],
  controllers: [AuthController],
  providers: [AuthService, JwtStrategy, UsersRepository],
  exports: [JwtStrategy, PassportModule],
})
export class AuthModule { }
