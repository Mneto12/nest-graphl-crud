import { CreateDevInput } from './create-dev.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateDevInput extends PartialType(CreateDevInput) {
  @Field(() => Int)
  id: number;
}
