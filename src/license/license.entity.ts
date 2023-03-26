import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
@ObjectType()
export class License {
  @PrimaryGeneratedColumn('increment')
  @Field((type) => Int)
  _id: number;

  @Column()
  @Field()
  management_name: string;

  @Column()
  @Field()
  management_version: string;

  @Column()
  @Field()
  user_actived_num: number;

  @Column({ default: () => 'CURRENT_TIMESTAMP' })
  @Field()
  license_buy_date: Date;

  @Column()
  @Field()
  license_status: string;

  @Column()
  @Field()
  expired_license_date: Date;

  @Column()
  @Field()
  price_license: number;

  @Column()
  @Field()
  price_total: number;

  @Column()
  @Field()
  type_license: string;

  @Column()
  @Field()
  limit_license: number;

  @Column()
  @Field()
  mod_supp_license: string;

  @Column()
  @Field()
  user_id: number;

  @Column()
  @Field()
  payment_method: number;

  @Column({ default: true })
  @Field()
  active_status: boolean;

  @Column({ default: () => 'CURRENT_TIMESTAMP' })
  @Field()
  createdAt: Date;

  @Column({ default: () => 'CURRENT_TIMESTAMP' })
  @Field()
  modifiedAt: Date;

  @Column({ nullable: true, default: null })
  @Field()
  deleteAt: Date;
}
