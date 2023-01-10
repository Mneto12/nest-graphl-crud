import { Injectable } from '@nestjs/common';
import { Project } from './project.entity';

@Injectable()
export class ProjectsService {
    async getAll(): Promise<Project []> {
        const project = new Project();

        project.id = 1;
        project.name = "Migration of database";
        project.status = 'hi' 
        project.roles = "Backend Developer"

        return [project];
    }
}
