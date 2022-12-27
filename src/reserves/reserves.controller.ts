import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ReservesService } from './reserves.service';
import { CreateReserveDto } from './dto/create-reserve.dto';
import { UpdateReserveDto } from './dto/update-reserve.dto';

@Controller('reserves')
export class ReservesController {
  constructor(private readonly reservesService: ReservesService) {}

  @Post()
  createReserve(@Body() createReserveDto: CreateReserveDto) {
    return this.reservesService.createReserve(createReserveDto);
  }

  @Get()
  getAllReserves() {
    return this.reservesService.getAllReserves();
  }

  @Get(':id')
  getReserveById(@Param('id') id: number) {
    return this.reservesService.getReserveById(id);
  }

  @Patch(':id')
  updateReserve(@Param('id') id: number, @Body() updateReserveDto: UpdateReserveDto) {
    return this.reservesService.updateReserve(id, updateReserveDto);
  }

  @Delete(':id')
  removeReserve(@Param('id') id: number) {
    return this.reservesService.removeReserve(id);
  }
}