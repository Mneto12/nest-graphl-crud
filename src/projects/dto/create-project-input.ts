import { InputType, Field } from "@nestjs/graphql";
import { IsAlpha } from "class-validator";
import { IsNotEmpty } from "class-validator";
import { Status } from "../enum";

@InputType()
export class createProjectInput {

    @IsNotEmpty()
    @Field()
    name: string;

    @IsNotEmpty()
    @Field()
    description?: string;

    @IsNotEmpty()
    @Field(type => Status)
    @IsAlpha()
    status: string;

    @IsNotEmpty()
    @Field({nullable: true})
    devs?: string;

    @IsNotEmpty()
    @Field({nullable: true})
    roles: string;
}