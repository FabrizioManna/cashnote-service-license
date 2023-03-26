import { Field, InputType, Int } from '@nestjs/graphql';

@InputType()
export class LicenseDeleteInput {
  @Field((type) => Int)
  _id: number;
}
