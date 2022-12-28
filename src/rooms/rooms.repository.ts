import { Room } from './entities/room.entity';
import { CreateRoomDto } from './dto/create-room.dto';
import { UpdateRoomDto } from './dto/update-room.dto';
import { EntityRepository, Repository } from 'typeorm';

@EntityRepository()
export class RoomsRepository extends Repository<Room> {
  createRoom(createRoomDto: CreateRoomDto) {
    const { name } = createRoomDto;
    const room = this.create({
      name: name,
    });
    return this.save(room);
  }

  getAllRooms() {
    return this.createQueryBuilder('room').getMany();
  }

  getRoomById(id) {
    return this.findOne(id);
  }

  removeRoom(id) {
    return this.delete(id);
  }
}
