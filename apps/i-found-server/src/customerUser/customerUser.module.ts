import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { CustomerUserModuleBase } from "./base/customerUser.module.base";
import { CustomerUserService } from "./customerUser.service";
import { CustomerUserController } from "./customerUser.controller";
import { CustomerUserResolver } from "./customerUser.resolver";

@Module({
  imports: [CustomerUserModuleBase, forwardRef(() => AuthModule)],
  controllers: [CustomerUserController],
  providers: [CustomerUserService, CustomerUserResolver],
  exports: [CustomerUserService],
})
export class CustomerUserModule {}
