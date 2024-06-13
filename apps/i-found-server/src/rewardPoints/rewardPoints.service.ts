import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { RewardPointsServiceBase } from "./base/rewardPoints.service.base";

@Injectable()
export class RewardPointsService extends RewardPointsServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
