import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateSpecialtyInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
