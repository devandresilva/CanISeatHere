import { Injectable } from '@nestjs/common';
import { CreateReserveDto } from './dto/create-reserve.dto';
import { UpdateReserveDto } from './dto/update-reserve.dto';
import { ReservesRepository } from './reserves.repository';

@Injectable()
export class ReservesService {
  constructor(private readonly reservesRepository: ReservesRepository) { }

  createReserve(createReserveDto: CreateReserveDto) {
    return this.reservesRepository.createReserve(createReserveDto);
  }

  getAllReserves() {
    return this.reservesRepository.getAllReserves();
  }

  getReserveById(id: number) {
    return this.reservesRepository.getReserveById(id);
  }

  updateReserve(id: number, updateReserveDto: UpdateReserveDto) {
    return this.reservesRepository.updateReserve(id, updateReserveDto);
  }

  removeReserve(id: number) {
    return this.reservesRepository.removeReserve(id);
  }
}
