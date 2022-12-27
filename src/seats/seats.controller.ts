import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SeatsService } from './seats.service';
import { CreateSeatDto } from './dto/create-seat.dto';
import { UpdateSeatDto } from './dto/update-seat.dto';

@Controller('seats')
export class SeatsController {
  constructor(private readonly seatsService: SeatsService) {}

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

  @Patch(':id')
  updateSeat(@Param('id') id: number, @Body() updateSeatDto: UpdateSeatDto) {
    return this.seatsService.updateSeat(id, updateSeatDto);
  }

  @Delete(':id')
  removeSeat(@Param('id') id: number) {
    return this.seatsService.removeSeat(id);
  }

}
