import { Module } from '@nestjs/common';
import { ProjectsService } from './projects.service';
import { ProjectsResolver } from './projects.resolver';
import { Project } from './project.entity';
import { TypeOrmModule } from '@nestjs/typeorm/dist';
import { DevsModule } from 'src/devs/devs.module';

@Module({
  imports: [TypeOrmModule.forFeature([Project]), DevsModule],
  providers: [ProjectsService, ProjectsResolver]
})
export class ProjectsModule {}
