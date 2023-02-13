import { Test, TestingModule } from '@nestjs/testing';
import { LicenseResolver } from './license.resolver';

describe('LicenseResolver', () => {
  let resolver: LicenseResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LicenseResolver],
    }).compile();

    resolver = module.get<LicenseResolver>(LicenseResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
