import { Module } from '@nestjs/common';
import { DevsService } from './devs.service';
import { DevsResolver } from './devs.resolver';
import { Devs } from './entities/dev.entity';
import { TypeOrmModule } from '@nestjs/typeorm'

@Module({
  imports: [TypeOrmModule.forFeature([Devs])],
  providers: [DevsResolver, DevsService],
  exports: [DevsService]
})
export class DevsModule {}
