import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateDevInput } from './dto/create-dev.input';
import { UpdateDevInput } from './dto/update-dev.input';
import { Dev } from './entities/dev.entity';

@Injectable()
export class DevsService {
  constructor(@InjectRepository(Dev) private devsRepository: Repository<Dev>) {}

  create(createDevInput: CreateDevInput) {
    const newDev = this.devsRepository.create(createDevInput);

    return this.devsRepository.save(newDev);
  }

  findAll() {
    return this.devsRepository.find();
  }

  findOne(id: number) {
    return this.devsRepository.find({
      where: {
        id: id
      }
    });
  }

  // update(id: number, updateDevInput: UpdateDevInput) {
  //   return `This action updates a #${id} dev`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} dev`;
  // }
}
