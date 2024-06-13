import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { BusinessUserModuleBase } from "./base/businessUser.module.base";
import { BusinessUserService } from "./businessUser.service";
import { BusinessUserController } from "./businessUser.controller";
import { BusinessUserResolver } from "./businessUser.resolver";

@Module({
  imports: [BusinessUserModuleBase, forwardRef(() => AuthModule)],
  controllers: [BusinessUserController],
  providers: [BusinessUserService, BusinessUserResolver],
  exports: [BusinessUserService],
})
export class BusinessUserModule {}
