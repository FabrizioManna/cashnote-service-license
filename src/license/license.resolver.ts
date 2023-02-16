import { Args, Resolver, Query, Mutation } from '@nestjs/graphql';
import { License } from './license.entity';
import { LicenseService } from './license.service';
import { LicenseInput } from './dto/license.input';
import { LicenseDeleteInput } from './dto/delete-license.input';
import { NotFoundException } from '@nestjs/common'; 
import { LicenseSearchInput } from './dto/license-find.input';
@Resolver((of) => License)
export class LicenseResolver {
    constructor(private licenseService: LicenseService) {}

    @Query((type) => [License])
    async getAllLicense() {
        return this.licenseService.getLicense();
    }

    @Mutation((returns) => License) 
    createLicense(@Args('licenseInput') licenseInput: LicenseInput): Promise<License> {
        return this.licenseService.createLicense(licenseInput);
    }

    @Query(returns => [License])
    async findLicense(@Args('licenseSearchInput') licenseSearchInput: LicenseSearchInput): Promise<License[]> {
        return await this.licenseService.findLicenseByFilters(licenseSearchInput);
    }

    @Mutation((returns) => Boolean)
   async deleteLicense(
    @Args('licenseDeleteInput') licenseDeleteInput: LicenseDeleteInput,
  ): Promise<boolean> {
        const { _id } = licenseDeleteInput;
        const license = await this.licenseService.getLicenseById(_id);

        if (!license) {
            throw new NotFoundException(`License with ID ${_id} not found`);
        }

        return await this.licenseService.deleteLicense(_id); 
    }

}
