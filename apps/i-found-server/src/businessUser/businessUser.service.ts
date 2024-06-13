import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { BusinessUserServiceBase } from "./base/businessUser.service.base";

@Injectable()
export class BusinessUserService extends BusinessUserServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
