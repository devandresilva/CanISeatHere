import { Injectable } from "@nestjs/common";
import { Movie } from "./entities/movie.entity";

@Injectable()
export class MoviesRepository {
  private movies: Movie[] = []

}