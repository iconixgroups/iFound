import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { OfferModuleBase } from "./base/offer.module.base";
import { OfferService } from "./offer.service";
import { OfferController } from "./offer.controller";
import { OfferResolver } from "./offer.resolver";

@Module({
  imports: [OfferModuleBase, forwardRef(() => AuthModule)],
  controllers: [OfferController],
  providers: [OfferService, OfferResolver],
  exports: [OfferService],
})
export class OfferModule {}
