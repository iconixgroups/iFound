import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { RewardPointsResolverBase } from "./base/rewardPoints.resolver.base";
import { RewardPoints } from "./base/RewardPoints";
import { RewardPointsService } from "./rewardPoints.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => RewardPoints)
export class RewardPointsResolver extends RewardPointsResolverBase {
  constructor(
    protected readonly service: RewardPointsService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
