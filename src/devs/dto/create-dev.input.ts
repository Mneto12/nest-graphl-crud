import { InputType, Field } from '@nestjs/graphql';
import { IsNotEmpty } from "class-validator";
import { Project } from 'src/projects/project.entity';

@InputType()
export class CreateDevInput {

    @IsNotEmpty()
    @Field()
    name: string;

    @IsNotEmpty()
    @Field()
    email: string;

    @IsNotEmpty()
    @Field(type => [Project], {nullable: true})
    projects: Project[];

    @IsNotEmpty()
    @Field({nullable: true})
    roles: string;
}
