import { Room } from "./entities/room.entity";
import { CreateRoomDto } from "./dto/create-room.dto";
import { UpdateRoomDto } from "./dto/update-room.dto";
import { EntityRepository, Repository } from "typeorm";

@EntityRepository()
export class RoomsRepository extends Repository<Room>{

  createRoom(createRoomDto: CreateRoomDto) {
    return "por fazer";
  }

  getAllRooms() {
    return "por fazer";
  }

  getRoomById(id: number) {
    return "por fazer";
  }

  updateRoom(id: number, updateRoomDto: UpdateRoomDto) {
    return "por fazer";
  }

  removeRoom(id: number) {
    return "por fazer";
  }
}