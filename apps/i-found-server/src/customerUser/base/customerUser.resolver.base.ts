/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { CustomerUser } from "./CustomerUser";
import { CustomerUserCountArgs } from "./CustomerUserCountArgs";
import { CustomerUserFindManyArgs } from "./CustomerUserFindManyArgs";
import { CustomerUserFindUniqueArgs } from "./CustomerUserFindUniqueArgs";
import { CreateCustomerUserArgs } from "./CreateCustomerUserArgs";
import { UpdateCustomerUserArgs } from "./UpdateCustomerUserArgs";
import { DeleteCustomerUserArgs } from "./DeleteCustomerUserArgs";
import { CustomerUserService } from "../customerUser.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => CustomerUser)
export class CustomerUserResolverBase {
  constructor(
    protected readonly service: CustomerUserService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "CustomerUser",
    action: "read",
    possession: "any",
  })
  async _customerUsersMeta(
    @graphql.Args() args: CustomerUserCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [CustomerUser])
  @nestAccessControl.UseRoles({
    resource: "CustomerUser",
    action: "read",
    possession: "any",
  })
  async customerUsers(
    @graphql.Args() args: CustomerUserFindManyArgs
  ): Promise<CustomerUser[]> {
    return this.service.customerUsers(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => CustomerUser, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "CustomerUser",
    action: "read",
    possession: "own",
  })
  async customerUser(
    @graphql.Args() args: CustomerUserFindUniqueArgs
  ): Promise<CustomerUser | null> {
    const result = await this.service.customerUser(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => CustomerUser)
  @nestAccessControl.UseRoles({
    resource: "CustomerUser",
    action: "create",
    possession: "any",
  })
  async createCustomerUser(
    @graphql.Args() args: CreateCustomerUserArgs
  ): Promise<CustomerUser> {
    return await this.service.createCustomerUser({
      ...args,
      data: args.data,
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => CustomerUser)
  @nestAccessControl.UseRoles({
    resource: "CustomerUser",
    action: "update",
    possession: "any",
  })
  async updateCustomerUser(
    @graphql.Args() args: UpdateCustomerUserArgs
  ): Promise<CustomerUser | null> {
    try {
      return await this.service.updateCustomerUser({
        ...args,
        data: args.data,
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => CustomerUser)
  @nestAccessControl.UseRoles({
    resource: "CustomerUser",
    action: "delete",
    possession: "any",
  })
  async deleteCustomerUser(
    @graphql.Args() args: DeleteCustomerUserArgs
  ): Promise<CustomerUser | null> {
    try {
      return await this.service.deleteCustomerUser(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }
}
