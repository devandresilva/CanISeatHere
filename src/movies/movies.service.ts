import { Injectable } from '@nestjs/common';
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';
import { MoviesRepository } from './movies.repository';

@Injectable()
export class MoviesService {
  constructor(private moviesRepository: MoviesRepository){}

  createMovie(createMovieDto: CreateMovieDto) {
    return this.moviesRepository.createMovie(createMovieDto);
  }

  getAllMovies() {
    return this.moviesRepository.getAllMovies();
  }

  getMovieById(id: number) {
    return this.moviesRepository.getMovieById(id);
  }

  updateMovie(id: number, updateMovieDto: UpdateMovieDto) {
    return  this.moviesRepository.updateMovie(id, updateMovieDto);
  }

  removeMovie(id: number) {
    return  this.moviesRepository.removeMovie(id);
  }
}
