/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { RewardPointsWhereInput } from "./RewardPointsWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { RewardPointsOrderByInput } from "./RewardPointsOrderByInput";

@ArgsType()
class RewardPointsFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => RewardPointsWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => RewardPointsWhereInput, { nullable: true })
  @Type(() => RewardPointsWhereInput)
  where?: RewardPointsWhereInput;

  @ApiProperty({
    required: false,
    type: [RewardPointsOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [RewardPointsOrderByInput], { nullable: true })
  @Type(() => RewardPointsOrderByInput)
  orderBy?: Array<RewardPointsOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { RewardPointsFindManyArgs as RewardPointsFindManyArgs };
