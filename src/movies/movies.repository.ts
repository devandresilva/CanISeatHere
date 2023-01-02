import { Movie } from './entities/movie.entity';
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';
import { EntityRepository, Repository, DataSource } from 'typeorm';
import { Injectable } from '@nestjs/common/decorators';

@Injectable()
export class MoviesRepository {

  constructor(
    private dataSource: DataSource
  ) { }
  createMovie(createMovieDto: CreateMovieDto) {
    const { name, synopsis } = createMovieDto;
    const movie = this.dataSource.getRepository(Movie).create({
      name: name,
      synopsis: synopsis
    });
    return this.dataSource.getRepository(Movie).save(movie);
  }

  getAllMovies() {
    return this.dataSource.getRepository(Movie).createQueryBuilder('movie').getMany();
  }

  getMovieById(id) {
    return this.dataSource.getRepository(Movie).findOne({ where: { id: id } });
  }

  async updateMovie(id: number, updateMovieDto: UpdateMovieDto) {
    const { name, synopsis } = updateMovieDto;
    let movie = await this.getMovieById(id);
    movie.name = name;
    movie.synopsis = synopsis;
    return this.dataSource.getRepository(Movie).save(movie);
  }

  removeMovie(id: number) {
    return this.dataSource.getRepository(Movie).delete(id);
  }
}
