import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { RewardPointsModuleBase } from "./base/rewardPoints.module.base";
import { RewardPointsService } from "./rewardPoints.service";
import { RewardPointsController } from "./rewardPoints.controller";
import { RewardPointsResolver } from "./rewardPoints.resolver";

@Module({
  imports: [RewardPointsModuleBase, forwardRef(() => AuthModule)],
  controllers: [RewardPointsController],
  providers: [RewardPointsService, RewardPointsResolver],
  exports: [RewardPointsService],
})
export class RewardPointsModule {}
