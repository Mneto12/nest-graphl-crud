import { Field, ObjectType, Int, InputType } from "@nestjs/graphql";
import { Devs } from "../devs/entities/dev.entity";
import { Column, Entity,ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Status } from "./enum";

@Entity()
@InputType()
@ObjectType()
export class Project {

    @PrimaryGeneratedColumn()
    @Field(type => Int)
    id: number;

    @Column()
    @Field(type => String)
    name: string;

    @Column()
    @Field(type => String)
    description?: string;

    @Column()
    @Field(type => Status)
    status: string;

    @Column()
    @Field(type => Int)
    devId: number;

    @ManyToOne(() => Devs, dev => dev.name)
    @Field(() => Devs)
    devs?: Devs[];
}