import { Injectable } from "@nestjs/common";
import { Movie } from "./entities/movie.entity";
import { CreateMovieDto } from "./dto/create-movie.dto";
import { UpdateMovieDto } from "./dto/update-movie.dto";

@Injectable()
export class MoviesRepository {
  //Array para teste (dados não persistentes)
  private movies: Movie[] = []

  createMovie(createMovieDto: CreateMovieDto) {
    return `cria um filme com os dados do ${createMovieDto}`;
  }

  getAllMovies() {
    return this.movies;
  }

  getMovieById(id: number) {
    return `filme com esse ${id}`;
  }

  updateMovie(id: number, updateMovieDto: UpdateMovieDto) {
    return `atualiza o filme com esse ${id} com dados do ${updateMovieDto}`;
  }

  removeMovie(id: number) {
    return `remove o filme com esse ${id}`;
  }
}