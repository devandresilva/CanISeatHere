
import { Injectable } from '@nestjs/common';
import { Room } from './entities/room.entity';
import { CreateRoomDto } from './dto/create-room.dto';
import { UpdateRoomDto } from './dto/update-room.dto';
import { EntityRepository, Repository, DataSource } from 'typeorm';

@Injectable()
export class RoomsRepository {

  constructor(private dataSouce: DataSource) { }

  createRoom(createRoomDto: CreateRoomDto) {
    const { name } = createRoomDto;
    const room = this.dataSouce.getRepository(Room).create({
      name: name,
    });
    return this.dataSouce.getRepository(Room).save(room);
  }

  getAllRooms() {
    return this.dataSouce.getRepository(Room).createQueryBuilder('room').getMany();
  }

  getRoomById(id) {
    return this.dataSouce.getRepository(Room).findOne({ where: { id: id } });
  }

  async updateRoom(id: number, updateRoomDto: UpdateRoomDto) {
    const { name } = updateRoomDto;
    let room = await this.getRoomById(id);
    room.name = name;
    return this.dataSouce.getRepository(Room).save(room);
  }

  removeRoom(id) {
    return this.dataSouce.getRepository(Room).delete(id);
  }
}
