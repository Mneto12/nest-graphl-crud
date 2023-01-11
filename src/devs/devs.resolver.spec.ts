import { Test, TestingModule } from '@nestjs/testing';
import { DevsResolver } from './devs.resolver';
import { DevsService } from './devs.service';

describe('DevsResolver', () => {
  let resolver: DevsResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DevsResolver, DevsService],
    }).compile();

    resolver = module.get<DevsResolver>(DevsResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
