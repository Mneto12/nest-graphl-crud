import { Injectable } from '@nestjs/common';
import { CreateDevInput } from './dto/create-dev.input';
import { UpdateDevInput } from './dto/update-dev.input';

@Injectable()
export class DevsService {
  create(createDevInput: CreateDevInput) {
    return 'This action adds a new dev';
  }

  findAll() {
    return `This action returns all devs`;
  }

  findOne(id: number) {
    return `This action returns a #${id} dev`;
  }

  update(id: number, updateDevInput: UpdateDevInput) {
    return `This action updates a #${id} dev`;
  }

  remove(id: number) {
    return `This action removes a #${id} dev`;
  }
}
