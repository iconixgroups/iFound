import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { TransactionService } from "./transaction.service";
import { TransactionControllerBase } from "./base/transaction.controller.base";

@swagger.ApiTags("transactions")
@common.Controller("transactions")
export class TransactionController extends TransactionControllerBase {
  constructor(
    protected readonly service: TransactionService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
