import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { UserFeedbackServiceBase } from "./base/userFeedback.service.base";

@Injectable()
export class UserFeedbackService extends UserFeedbackServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
