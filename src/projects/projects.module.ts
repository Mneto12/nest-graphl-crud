import { Module } from '@nestjs/common';
import { ProjectsService } from './projects.service';
import { ProjectsResolver } from './projects.resolver';
import { Project } from './project.entity';
import { TypeOrmModule } from '@nestjs/typeorm/dist';

@Module({
  imports: [TypeOrmModule.forFeature([Project])],
  providers: [ProjectsService, ProjectsResolver]
})
export class ProjectsModule {}
