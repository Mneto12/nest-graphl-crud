import { Field, ObjectType, Int, InputType } from "@nestjs/graphql";
import { Dev } from "src/devs/entities/dev.entity";
import { Column, Entity,ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Status } from "./enum";

@Entity()
@InputType('createProjectInput')
@ObjectType('project')
export class Project {

    @PrimaryGeneratedColumn()
    @Field(type => Int)
    id: number;

    @Column()
    @Field()
    name: string;

    @Column()
    @Field()
    description?: string;

    @Column()
    @Field(type => Status)
    status: string;

    @Column()
    @Field(type => Int)
    devId: number;

    @ManyToOne(() => Dev, dev => dev.name)
    @Field(type => Dev)
    devs?: Dev[];

    @Column({nullable: true})
    @Field({nullable: true})
    roles: string;
}