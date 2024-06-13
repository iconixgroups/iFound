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
import { OfferWhereInput } from "./OfferWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { OfferOrderByInput } from "./OfferOrderByInput";

@ArgsType()
class OfferFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => OfferWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => OfferWhereInput, { nullable: true })
  @Type(() => OfferWhereInput)
  where?: OfferWhereInput;

  @ApiProperty({
    required: false,
    type: [OfferOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [OfferOrderByInput], { nullable: true })
  @Type(() => OfferOrderByInput)
  orderBy?: Array<OfferOrderByInput>;

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

export { OfferFindManyArgs as OfferFindManyArgs };
