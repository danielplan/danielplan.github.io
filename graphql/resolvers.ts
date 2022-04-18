import { Context } from "./context";
export const resolvers = {
  Query: {
    references: async (_parent: any, _args: any, ctx: Context) => {
      return await ctx.prisma.reference.findMany({
        include: { categories: { include: { Category: true } } },
      });
    },
  },
};
