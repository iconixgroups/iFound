import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CustomerUserServiceBase } from "./base/customerUser.service.base";

@Injectable()
export class CustomerUserService extends CustomerUserServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
