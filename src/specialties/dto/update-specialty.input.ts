import { CreateSpecialtyInput } from './create-specialty.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateSpecialtyInput extends PartialType(CreateSpecialtyInput) {
  @Field(() => Int)
  id: number;
}
