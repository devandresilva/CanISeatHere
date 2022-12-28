import { Injectable } from '@nestjs/common';
import { CreateRoomDto } from './dto/create-room.dto';
import { UpdateRoomDto } from './dto/update-room.dto';
import { RoomsRepository } from './rooms.repository';

@Injectable()
export class RoomsService {
  constructor(private readonly roomRepository: RoomsRepository) {}

  createRoom(createRoomDto: CreateRoomDto) {
    return this.roomRepository.createRoom(createRoomDto);
  }

  getAllRooms() {
    return this.roomRepository.getAllRooms();
  }

  getRoomById(id) {
    return this.roomRepository.getRoomById(id);
  }

  removeRoom(id) {
    return this.roomRepository.removeRoom(id);
  }
}
