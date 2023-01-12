import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateSpecialtyInput } from './dto/create-specialty.input';
import { UpdateSpecialtyInput } from './dto/update-specialty.input';
import { Specialty } from './entities/specialty.entity';

@Injectable()
export class SpecialtiesService {
  constructor(@InjectRepository(Specialty) private specialtyRepository: Repository<Specialty>){}

  createProject(createSpecialtyInput: CreateSpecialtyInput): Promise<Specialty []> {
      const newSpecialty = this.specialtyRepository.create(createSpecialtyInput);

      return this.specialtyRepository.save(newSpecialty);;
  }

  async getAll(): Promise<Specialty []> {
      return this.specialtyRepository.find();
  }

  getDev(id: number): Promise<Specialty []> {
      return this.specialtyRepository.find({
        where: {
          id: id
        }
      });
  }

  update(id: number, updateSpecialtyInput: UpdateSpecialtyInput) {
    return `This action updates a #${id} specialty`;
  }

  remove(id: number) {
    return `This action removes a #${id} specialty`;
  }
}
