import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { createProjectInput } from './dto/create-project-input';
import { Project } from './project.entity';
import { ProjectsService } from './projects.service';

@Resolver(of => Project)
export class ProjectsResolver {
    constructor(private projectService: ProjectsService) {}

    @Query(returns => [Project])
    projects(): Promise<Project []> {
        return this.projectService.getAll();
    }

    @Mutation(returns => Project)
    createProject(@Args('createProjectInput') CreateProjectInput: createProjectInput): Promise<Project> {
        return this.projectService.createProject(CreateProjectInput);
    }
}
