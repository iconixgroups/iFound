import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { BusinessUserService } from "./businessUser.service";
import { BusinessUserControllerBase } from "./base/businessUser.controller.base";

@swagger.ApiTags("businessUsers")
@common.Controller("businessUsers")
export class BusinessUserController extends BusinessUserControllerBase {
  constructor(
    protected readonly service: BusinessUserService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
