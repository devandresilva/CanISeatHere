import { Injectable } from "@nestjs/common";
import { Room } from "./entities/room.entity";
import { CreateRoomDto } from "./dto/create-room.dto";
import { UpdateRoomDto } from "./dto/update-room.dto";

@Injectable()
export class RoomsRepository {
   //Array para teste (dados não persistentes)
  private rooms: Room[] = []

  createRoom(createRoomDto: CreateRoomDto) {
    return `cria uma sala com os dados do ${createRoomDto}`;
  }

  getAllRooms() {
    return this.rooms;
  }

  getRoomById(id: number) {
    return `sala com esse id: ${id}`;
  }

  updateRoom(id: number, updateRoomDto: UpdateRoomDto) {
    return `atualiza a sala com esse id: ${id} com dados do ${updateRoomDto}`;
  }

  removeRoom(id: number) {
    return `remove a sala com esse id: ${id}`;
  }
}