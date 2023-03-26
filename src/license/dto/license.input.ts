import { Field, InputType } from '@nestjs/graphql';
import { licenseStatusEnum } from './license-status.enum';

@InputType()
export class LicenseInput {

  @Field()
  management_name: string;

  @Field()
  management_version: string;

  @Field()
  user_actived_num: number;

  @Field()
  license_buy_date: Date;

  @Field()
  license_status: licenseStatusEnum;

  @Field()
  expired_license_date: Date;

  @Field()
  price_license: number;

  @Field()
  price_total: number;

  @Field()
  type_license: string;

  @Field()
  limit_license: number;

  @Field()
  mod_supp_license: string;

  @Field()
  user_id: number;

  @Field()
  payment_method: number;
}
