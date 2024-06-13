import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { UserFeedbackModuleBase } from "./base/userFeedback.module.base";
import { UserFeedbackService } from "./userFeedback.service";
import { UserFeedbackController } from "./userFeedback.controller";
import { UserFeedbackResolver } from "./userFeedback.resolver";

@Module({
  imports: [UserFeedbackModuleBase, forwardRef(() => AuthModule)],
  controllers: [UserFeedbackController],
  providers: [UserFeedbackService, UserFeedbackResolver],
  exports: [UserFeedbackService],
})
export class UserFeedbackModule {}
