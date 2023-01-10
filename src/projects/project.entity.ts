import { Field, ObjectType, Int } from "@nestjs/graphql";
import { Status } from "./enum";

@ObjectType()
export class Project {

    @Field(type => Int)
    id: number;

    @Field()
    name: string;

    @Field()
    description?: string;

    @Field(type => Status)
    status: string;

    @Field({nullable: true})
    devs?: string;

    @Field({nullable: true})
    roles: string;
}