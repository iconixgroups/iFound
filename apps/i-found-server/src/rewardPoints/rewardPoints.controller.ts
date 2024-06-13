import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { RewardPointsService } from "./rewardPoints.service";
import { RewardPointsControllerBase } from "./base/rewardPoints.controller.base";

@swagger.ApiTags("rewardPoints")
@common.Controller("rewardPoints")
export class RewardPointsController extends RewardPointsControllerBase {
  constructor(
    protected readonly service: RewardPointsService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
