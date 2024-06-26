/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { RewardPointsWhereInput } from "./RewardPointsWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class RewardPointsListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => RewardPointsWhereInput,
  })
  @ValidateNested()
  @Type(() => RewardPointsWhereInput)
  @IsOptional()
  @Field(() => RewardPointsWhereInput, {
    nullable: true,
  })
  every?: RewardPointsWhereInput;

  @ApiProperty({
    required: false,
    type: () => RewardPointsWhereInput,
  })
  @ValidateNested()
  @Type(() => RewardPointsWhereInput)
  @IsOptional()
  @Field(() => RewardPointsWhereInput, {
    nullable: true,
  })
  some?: RewardPointsWhereInput;

  @ApiProperty({
    required: false,
    type: () => RewardPointsWhereInput,
  })
  @ValidateNested()
  @Type(() => RewardPointsWhereInput)
  @IsOptional()
  @Field(() => RewardPointsWhereInput, {
    nullable: true,
  })
  none?: RewardPointsWhereInput;
}
export { RewardPointsListRelationFilter as RewardPointsListRelationFilter };
