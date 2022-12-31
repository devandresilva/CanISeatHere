import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { MoviesService } from './movies.service';
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';
import { AuthGuard } from '@nestjs/passport';

@Controller('movies')
@UseGuards(AuthGuard('jwt'))
export class MoviesController {
  constructor(private moviesService: MoviesService) { }

  @Post()
  createMovie(@Body() createMovieDto: CreateMovieDto) {
    return this.moviesService.createMovie(createMovieDto);
  }

  @Get()
  getAllMovies() {
    return this.moviesService.getAllMovies();
  }

  @Get(':id')
  getMovieById(@Param('id') id: number) {
    return this.moviesService.getMovieById(id);
  }

  @Patch(':id')
  updateMovie(@Param('id') id: number, @Body() updateMovieDto: UpdateMovieDto) {
    return this.moviesService.updateMovie(id, updateMovieDto);
  }

  @Delete(':id')
  removeMovie(@Param('id') id: number) {
    return this.moviesService.removeMovie(id);
  }
}
