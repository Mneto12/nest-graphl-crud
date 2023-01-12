import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { SpecialtiesService } from './specialties.service';
import { Specialty } from './entities/specialty.entity';
import { CreateSpecialtyInput } from './dto/create-specialty.input';
import { UpdateSpecialtyInput } from './dto/update-specialty.input';

@Resolver(() => Specialty)
export class SpecialtiesResolver {
  constructor(private readonly specialtiesService: SpecialtiesService) {}

  @Mutation(() => Specialty)
  createSpecialty(@Args('createSpecialtyInput') createSpecialtyInput: CreateSpecialtyInput) {
    return this.specialtiesService.create(createSpecialtyInput);
  }

  @Query(() => [Specialty], { name: 'specialties' })
  findAll() {
    return this.specialtiesService.findAll();
  }

  @Query(() => Specialty, { name: 'specialty' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.specialtiesService.findOne(id);
  }

  @Mutation(() => Specialty)
  updateSpecialty(@Args('updateSpecialtyInput') updateSpecialtyInput: UpdateSpecialtyInput) {
    return this.specialtiesService.update(updateSpecialtyInput.id, updateSpecialtyInput);
  }

  @Mutation(() => Specialty)
  removeSpecialty(@Args('id', { type: () => Int }) id: number) {
    return this.specialtiesService.remove(id);
  }
}
