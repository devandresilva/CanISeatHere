import { AuthModule } from './../auth/auth.module';
import { Module } from '@nestjs/common';
import { MoviesService } from './movies.service';
import { MoviesController } from './movies.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MoviesRepository } from './movies.repository';
import { Movie } from './entities/movie.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Movie]), AuthModule],
  controllers: [MoviesController],
  providers: [MoviesService, MoviesRepository],
  exports: [MoviesService],
})
export class MoviesModule { }
