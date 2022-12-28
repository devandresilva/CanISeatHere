import { Movie } from "./entities/movie.entity";
import { CreateMovieDto } from "./dto/create-movie.dto";
import { UpdateMovieDto } from "./dto/update-movie.dto";
import { EntityRepository, Repository } from "typeorm";

@EntityRepository(Movie)
export class MoviesRepository extends Repository<Movie> {

  createMovie(createMovieDto: CreateMovieDto) {
    const { name, synopsis, exhibitionDate } = createMovieDto;
    const movie = this.create({
      name: name,
      synopsis: synopsis,
      exhibitionDate: exhibitionDate
    })
  }

  getAllMovies() {
    return this.createQueryBuilder("movie").getMany()
  }

  getMovieById(id) {
    return this.findOne(id);
  }

  async updateMovie(id: number, updateMovieDto: UpdateMovieDto) {
    const { name, synopsis, exhibitionDate } = updateMovieDto;
    let movie = await this.getMovieById(id);
  }

  removeMovie(id: number) {
    return this.delete(id);
  }
}