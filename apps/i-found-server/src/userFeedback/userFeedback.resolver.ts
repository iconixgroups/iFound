import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { UserFeedbackResolverBase } from "./base/userFeedback.resolver.base";
import { UserFeedback } from "./base/UserFeedback";
import { UserFeedbackService } from "./userFeedback.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => UserFeedback)
export class UserFeedbackResolver extends UserFeedbackResolverBase {
  constructor(
    protected readonly service: UserFeedbackService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
