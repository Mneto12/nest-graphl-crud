import { Query, Resolver } from '@nestjs/graphql';
import { Project } from './project.entity';
import { ProjectsService } from './projects.service';

@Resolver(of => Project)
export class ProjectsResolver {
    constructor(private projectService: ProjectsService) {}

    @Query(returns => [Project])
    projects(): Promise<Project []> {
        return this.projectService.getAll();
    }
}
