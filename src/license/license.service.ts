import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { License } from './entity/license.entity';
import { Repository } from 'typeorm';
import { LicenseInput } from './dto/license.input';
import { FindOneOptions, Like, FindManyOptions } from 'typeorm';
import { LicenseSearchInput } from './dto/license-find.input';
import { LicenseDataUpdate } from './dto/license-update.input';
@Injectable()
/**
 * Class for comunication with db
 * this is used for CRUD operation
 * contain business logic
 *
 * @author Manna Fabrizio <mannafabrizio83@gmail.com>
 *
 */
export class LicenseService {
  constructor(
    @InjectRepository(License)
    private repositoryLicense: Repository<License>,
  ) {}

  /**
   * Function getLicense
   * return all license not deleted with status true
   *
   * @returns License[]
   * 
   */
  async getLicense(): Promise<License[]> {
    return await this.repositoryLicense.find({
      where: {
        active_status: true,
      },
    });
  }

  /**
   *
   * Function findLicenseByFilter
   * return an array o sigle license filtered
   *
   * @param {LicenseSearchInput} licenseSearchInput
   * @return License[]
   *
   */
  async findLicenseByFilters(licenseSearchInput: LicenseSearchInput): Promise<License[]> {
    const option: FindManyOptions<License> = {
      where: {},
    };

    if (licenseSearchInput.expired_license_date)
      option.where = {
        ...option.where,
        expired_license_date: licenseSearchInput.expired_license_date,
      };

    if (licenseSearchInput.license_buy_date)
      option.where = {
        ...option.where,
        license_buy_date: licenseSearchInput.license_buy_date,
      };

    if (licenseSearchInput.license_status)
      option.where = {
        ...option.where,
        license_status: licenseSearchInput.license_status,
      };

    if (licenseSearchInput.limit_license)
      option.where = {
        ...option.where,
        limit_license: licenseSearchInput.limit_license,
      };

    if (licenseSearchInput.management_name)
      option.where = {
        ...option.where,
        management_name: Like(`%${licenseSearchInput.management_name}%`),
      };

    if (licenseSearchInput.management_version)
      option.where = {
        ...option.where,
        management_version: licenseSearchInput.management_version,
      };

    if (licenseSearchInput.mod_supp_license)
      option.where = {
        ...option.where,
        mod_supp_license: licenseSearchInput.mod_supp_license,
      };

    if (licenseSearchInput.payment_method)
      option.where = {
        ...option.where,
        payment_method: licenseSearchInput.payment_method,
      };

    if (licenseSearchInput.price_license)
      option.where = {
        ...option.where,
        price_license: licenseSearchInput.price_license,
      };

    if (licenseSearchInput.price_total)
      option.where = {
        ...option.where,
        price_total: licenseSearchInput.price_total,
      };

    if (licenseSearchInput.type_license)
      option.where = {
        ...option.where,
        type_license: licenseSearchInput.type_license,
      };

    if (licenseSearchInput.user_actived_num)
      option.where = {
        ...option.where,
        type_license: licenseSearchInput.type_license,
      };

    if (licenseSearchInput.user_id)
      option.where = { ...option.where, user_id: licenseSearchInput.user_id };

    return await this.repositoryLicense.find(option);
  }

  /**
   * Function getLicenseByid
   * return a specific license by ID
   *
   * @param _id
   * @returns License
   * 
   */
  async getLicenseById(_id: number): Promise<License> {
    const options: FindOneOptions<License> = { where: { _id } };
    return await this.repositoryLicense.findOne(options);
  }

  /**
   * Function createLicense
   * insert a license in db
   *
   * @param LicenseInput
   * @returns License
   * 
   */
  async createLicense(LicenseInput: LicenseInput): Promise<License> {
    let newLicense = this.repositoryLicense.create(LicenseInput);
    newLicense.createdAt = new Date(Date.now());
    newLicense.modifiedAt = new Date(Date.now());
    return await this.repositoryLicense.save(newLicense);
  }

  /**
   * Function updateLicense
   * update a license with specific id in db
   * 
   * @param _id
   * @retuns License
   * 
   */
  async updateLicense(_id: number, updateLicenseData: LicenseDataUpdate): Promise<License> {
    let updateData = updateLicenseData;
    updateData.createdAt = new Date(Date.now());
    updateData.modifiedAt = new Date(Date.now());
    await this.repositoryLicense.update(_id, updateData);
    return this.repositoryLicense.findOne({ where: { _id } });
  } 

  /**
   * Function deleteLicense
   * delete in virtual mode the row of db
   *
   * @param _id
   * @return boolean;
   */
  async deleteLicense(_id: number): Promise<boolean> {
    const result = await this.repositoryLicense.update(_id, {
      active_status: false,
      modifiedAt: new Date(Date.now())
    });

    return result.affected > 0;
  }
}
