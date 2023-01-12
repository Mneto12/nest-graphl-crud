import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm/dist';
import { DevsService } from 'src/devs/devs.service';
import { Dev } from 'src/devs/entities/dev.entity';
import { Repository } from 'typeorm';
import { createProjectInput } from './dto/create-project-input';
import { Project } from './project.entity';

@Injectable()
export class ProjectsService {
    constructor(
        @InjectRepository(Project) private projectRepository: Repository<Project>,
        private devsService: DevsService
    ) {}

    createProject(createProjectInput: createProjectInput): Promise<Project> {
        const newProject = this.projectRepository.create(createProjectInput);

        return this.projectRepository.save(newProject);
    }

    async getAll(): Promise<Project []> {
        return this.projectRepository.find();
    }

    getDev(devId: number): Promise<Dev[]> {
        return this.devsService.findOne(devId);
    }
}
