import { Injectable } from "@nestjs/common";
import { Room } from "./entities/room.entity";

@Injectable()
export class RoomsRepository {
  private rooms: Room[] = []

}