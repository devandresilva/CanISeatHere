import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { SeatsService } from './seats.service';
import { CreateSeatDto } from './dto/create-seat.dto';
import { UpdateSeatDto } from './dto/update-seat.dto';
import { AuthGuard } from '@nestjs/passport';

@Controller('seats')
@UseGuards(AuthGuard('jwt'))
export class SeatsController {
  constructor(private readonly seatsService: SeatsService) { }

  @Post()
  createSeat(@Body() createSeatDto: CreateSeatDto) {
    return this.seatsService.createSeat(createSeatDto);
  }

  @Get()
  getAllSeats() {
    return this.seatsService.getAllSeats();
  }

  @Get(':id')
  getSeatById(@Param('id') id: number) {
    return this.seatsService.getSeatById(id);
  }

  @Delete(':id')
  removeSeat(@Param('id') id: number) {
    return this.seatsService.removeSeat(id);
  }
}
