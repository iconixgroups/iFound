import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { UserFeedbackService } from "./userFeedback.service";
import { UserFeedbackControllerBase } from "./base/userFeedback.controller.base";

@swagger.ApiTags("userFeedbacks")
@common.Controller("userFeedbacks")
export class UserFeedbackController extends UserFeedbackControllerBase {
  constructor(
    protected readonly service: UserFeedbackService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
