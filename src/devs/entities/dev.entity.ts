import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Project } from "src/projects/project.entity";

@Entity()
@ObjectType()
export class Dev {
  
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
    @Field(type => [Project], {nullable: true})
    projects?: Project[];

    @Column({nullable: true})
    @Field({nullable: true})
    roles: string;

}
