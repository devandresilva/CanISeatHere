import { User } from './../auth/user.entity';
import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { ReservesService } from './reserves.service';
import { CreateReserveDto } from './dto/create-reserve.dto';
import { UpdateReserveDto } from './dto/update-reserve.dto';
import { AuthGuard } from '@nestjs/passport';
import { GetUser } from 'src/auth/get-user.decorator';

@Controller('reserves')
@UseGuards(AuthGuard('jwt'))
export class ReservesController {
  constructor(private readonly reservesService: ReservesService) { }

  @Post()

  createReserve(@Body() createReserveDto: CreateReserveDto, @GetUser() user: User) {
    return this.reservesService.createReserve(createReserveDto, user);
  }

  @Get()
  getAllReserves() {
    return this.reservesService.getAllReserves();
  }

  @Get(':id')
  getReserveById(@Param('id') id: number) {
    return this.reservesService.getReserveById(id);
  }

  @Get('session/:id')
  getReservesBySessionId(@Param('id') id: number) {
    return this.reservesService.getReservesBySessionId(id);
  }

  @Patch(':id')
  updateReserve(@Param('id') id: number, @Body() updateReserveDto: UpdateReserveDto) {
    return 'fazer'
  }

  @Delete(':id')
  removeReserve(@Param('id') id: number) {
    return this.reservesService.removeReserve(id);
  }
}
