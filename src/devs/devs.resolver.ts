import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { DevsService } from './devs.service';
import { Dev } from './entities/dev.entity';
import { CreateDevInput } from './dto/create-dev.input';
import { UpdateDevInput } from './dto/update-dev.input';

@Resolver(() => Dev)
export class DevsResolver {
  constructor(private readonly devsService: DevsService) {}

  @Mutation(() => Dev)
  createDev(@Args('createDevInput') createDevInput: CreateDevInput) {
    return this.devsService.create(createDevInput);
  }

  @Query(() => [Dev], { name: 'devs' })
  findAll() {
    return this.devsService.findAll();
  }

  @Query(() => Dev, { name: 'dev' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.devsService.findOne(id);
  }

  @Mutation(() => Dev)
  updateDev(@Args('updateDevInput') updateDevInput: UpdateDevInput) {
    return this.devsService.update(updateDevInput.id, updateDevInput);
  }

  @Mutation(() => Dev)
  removeDev(@Args('id', { type: () => Int }) id: number) {
    return this.devsService.remove(id);
  }
}
