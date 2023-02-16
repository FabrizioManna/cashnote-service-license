import { Field, InputType } from '@nestjs/graphql';
import { licenseStatusEnum } from './license-status.enum';

@InputType()
export class LicenseSearchInput {

    @Field({nullable: true})
    management_name?: string;
    
    @Field({nullable: true})
    management_version?: string;

    @Field({nullable: true})
    user_actived_num?: number;

    @Field({nullable: true})
    license_buy_date?: Date;

    @Field({nullable: true})
    license_status?: licenseStatusEnum;

    @Field({nullable: true})
    expired_license_date?: Date;

    @Field({nullable: true})
    price_license?: number;

    @Field({nullable: true})
    price_total?: number;

    @Field({nullable: true})
    type_license?: string;

    @Field({nullable: true})
    limit_license?: number;

    @Field({nullable: true})
    mod_supp_license?: string;

    @Field({nullable: true})
    user_id?: number;

    @Field({nullable: true})
    payment_method?: number;
    
}