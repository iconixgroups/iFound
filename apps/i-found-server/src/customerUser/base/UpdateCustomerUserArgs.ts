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
import { CustomerUserWhereUniqueInput } from "./CustomerUserWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { CustomerUserUpdateInput } from "./CustomerUserUpdateInput";

@ArgsType()
class UpdateCustomerUserArgs {
  @ApiProperty({
    required: true,
    type: () => CustomerUserWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => CustomerUserWhereUniqueInput)
  @Field(() => CustomerUserWhereUniqueInput, { nullable: false })
  where!: CustomerUserWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => CustomerUserUpdateInput,
  })
  @ValidateNested()
  @Type(() => CustomerUserUpdateInput)
  @Field(() => CustomerUserUpdateInput, { nullable: false })
  data!: CustomerUserUpdateInput;
}

export { UpdateCustomerUserArgs as UpdateCustomerUserArgs };
