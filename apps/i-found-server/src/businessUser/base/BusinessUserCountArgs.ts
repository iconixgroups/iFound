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
import { BusinessUserWhereInput } from "./BusinessUserWhereInput";
import { Type } from "class-transformer";

@ArgsType()
class BusinessUserCountArgs {
  @ApiProperty({
    required: false,
    type: () => BusinessUserWhereInput,
  })
  @Field(() => BusinessUserWhereInput, { nullable: true })
  @Type(() => BusinessUserWhereInput)
  where?: BusinessUserWhereInput;
}

export { BusinessUserCountArgs as BusinessUserCountArgs };