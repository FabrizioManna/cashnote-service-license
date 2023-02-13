import { Module } from '@nestjs/common';
import { LicenseService } from './license.service';
import { LicenseResolver } from './license.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { License } from './license.entity';

@Module({
  imports: [TypeOrmModule.forFeature([License])],
  providers: [LicenseService, LicenseResolver]
})
export class LicenseModule {}
