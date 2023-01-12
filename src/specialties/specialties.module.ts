import { Module } from '@nestjs/common';
import { SpecialtiesService } from './specialties.service';
import { SpecialtiesResolver } from './specialties.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Specialty } from './entities/specialty.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Specialty])],
  providers: [SpecialtiesResolver, SpecialtiesService]
})
export class SpecialtiesModule {}
