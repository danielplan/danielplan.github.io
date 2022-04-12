import { Context } from "./context";
export const resolvers = {
  Query: {
    references: (_parent: any, _args: any, ctx: Context) => {
      return ctx.prisma.reference.findMany();
    },
  },
};
