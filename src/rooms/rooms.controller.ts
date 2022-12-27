import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RoomsService } from './rooms.service';
import { CreateRoomDto } from './dto/create-room.dto';
import { UpdateRoomDto } from './dto/update-room.dto';

@Controller('rooms')
export class RoomsController {
  constructor(private readonly roomsService: RoomsService) {}

  @Post()
  createRoom(@Body() createRoomDto: CreateRoomDto) {
    return this.roomsService.createRoom(createRoomDto);
  }

  @Get()
  getAllRooms() {
    return this.roomsService.getAllRooms();
  }

  @Get(':id')
  getRoomById(@Param('id') id: number) {
    return this.roomsService.getRoomById(id);
  }

  @Patch(':id')
  updateRoom(@Param('id') id: number, @Body() updateRoomDto: UpdateRoomDto) {
    return this.roomsService.updateRoom(id, updateRoomDto);
  }

  @Delete(':id')
  removeRoom(@Param('id') id: number) {
    return this.roomsService.removeRoom(id);
  }
}
