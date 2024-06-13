/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, UserFeedback as PrismaUserFeedback } from "@prisma/client";

export class UserFeedbackServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.UserFeedbackCountArgs, "select">
  ): Promise<number> {
    return this.prisma.userFeedback.count(args);
  }

  async userFeedbacks<T extends Prisma.UserFeedbackFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.UserFeedbackFindManyArgs>
  ): Promise<PrismaUserFeedback[]> {
    return this.prisma.userFeedback.findMany<Prisma.UserFeedbackFindManyArgs>(
      args
    );
  }
  async userFeedback<T extends Prisma.UserFeedbackFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.UserFeedbackFindUniqueArgs>
  ): Promise<PrismaUserFeedback | null> {
    return this.prisma.userFeedback.findUnique(args);
  }
  async createUserFeedback<T extends Prisma.UserFeedbackCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.UserFeedbackCreateArgs>
  ): Promise<PrismaUserFeedback> {
    return this.prisma.userFeedback.create<T>(args);
  }
  async updateUserFeedback<T extends Prisma.UserFeedbackUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.UserFeedbackUpdateArgs>
  ): Promise<PrismaUserFeedback> {
    return this.prisma.userFeedback.update<T>(args);
  }
  async deleteUserFeedback<T extends Prisma.UserFeedbackDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.UserFeedbackDeleteArgs>
  ): Promise<PrismaUserFeedback> {
    return this.prisma.userFeedback.delete(args);
  }
}
