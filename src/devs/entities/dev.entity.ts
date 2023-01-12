import { Column, Entity, OneToMany, PrimaryGeneratedColumn, Unique } from "typeorm";
import { ObjectType, Field, Int, InputType } from '@nestjs/graphql';
import { Project } from "src/projects/project.entity";

@Entity()
@InputType()
@ObjectType()
export class Devs {

    @PrimaryGeneratedColumn()
    @Field(type => Int)
    id: number;

    @Column()
    @Field()
    name: string;

    @Column()
    @Field()
    email: string;

    @OneToMany(() => Project, project => project.devs)
    @Field(() => Project)
    projects?: Project[];
}
