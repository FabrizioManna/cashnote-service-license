import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { License } from './license.entity';
import { Repository } from 'typeorm';
import { LicenseInput } from './dto/license.input';
import { LicenseDeleteInput } from './dto/delete-license.input';
import { FindOneOptions } from 'typeorm';
@Injectable()
export class LicenseService {
    constructor(
         @InjectRepository(License)
         private repositoryLicense: Repository<License>
    ) {}

    async getLicense(): Promise<License[]> {
        return await this.repositoryLicense.find({
            where: {
                active_status: true
            }
        });
    }

    async getLicenseById(_id: number): Promise<License> {
        const options: FindOneOptions<License> = { where: { _id } };
        return await this.repositoryLicense.findOne(options);
    }

    async createLicense(LicenseInput: LicenseInput): Promise<License> {
        const newLicense = this.repositoryLicense.create(LicenseInput);
        return this.repositoryLicense.save(newLicense);
    }

    async deleteLicense(_id: number): Promise<boolean> {
        const result = await this.repositoryLicense.update(_id, {
            active_status: false,
            deleteAt: new Date().getTime()
        });

        return result.affected > 0;
    }
}
