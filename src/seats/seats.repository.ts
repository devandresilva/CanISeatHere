import { Injectable } from "@nestjs/common";
import { Seat } from "./entities/seat.entity";

@Injectable()
export class SeatsRepository {
  private seats: Seat[] = []

}