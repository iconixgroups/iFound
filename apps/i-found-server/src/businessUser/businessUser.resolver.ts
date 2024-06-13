import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { BusinessUserResolverBase } from "./base/businessUser.resolver.base";
import { BusinessUser } from "./base/BusinessUser";
import { BusinessUserService } from "./businessUser.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => BusinessUser)
export class BusinessUserResolver extends BusinessUserResolverBase {
  constructor(
    protected readonly service: BusinessUserService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
