import { Movie } from "./entities/movie.entity";
import { CreateMovieDto } from "./dto/create-movie.dto";
import { UpdateMovieDto } from "./dto/update-movie.dto";
import { EntityRepository, Repository } from "typeorm";

@EntityRepository(Movie)
export class MoviesRepository extends Repository<Movie> {

  createMovie(createMovieDto: CreateMovieDto) {
    return "por fazer";
  }

  getAllMovies() {
    return "por fazer";
  }

  getMovieById(id: number) {
    return "por fazer";
  }

  updateMovie(id: number, updateMovieDto: UpdateMovieDto) {
    return "por fazer";
  }

  removeMovie(id: number) {
    return "por fazer";
  }
}