import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { CustomerUserService } from "./customerUser.service";
import { CustomerUserControllerBase } from "./base/customerUser.controller.base";

@swagger.ApiTags("customerUsers")
@common.Controller("customerUsers")
export class CustomerUserController extends CustomerUserControllerBase {
  constructor(
    protected readonly service: CustomerUserService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
