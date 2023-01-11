import { Module } from '@nestjs/common';
import { DevsService } from './devs.service';
import { DevsResolver } from './devs.resolver';
import { Dev } from './entities/dev.entity';
import { TypeOrmModule } from '@nestjs/typeorm'

@Module({
  imports: [TypeOrmModule.forFeature([Dev])],
  providers: [DevsResolver, DevsService]
})
export class DevsModule {}
