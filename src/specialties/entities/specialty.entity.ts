import { Field, ObjectType, Int, InputType } from "@nestjs/graphql";
import { Devs } from "src/devs/entities/dev.entity";
import { Column, Entity,ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
@InputType()
@ObjectType()
export class Specialty {
  
    @PrimaryGeneratedColumn()
    @Field(type => Int)
    id: number;

    @Column()
    @Field()
    name: string;

    @ManyToOne(() => Devs, devs => devs.name)
    @Field(() => Devs)
    devs?: Devs[];
}
