import { Context } from '@apollo/client';

export const resolvers = {
  Query: {
    notes: (_parent: undefined, _args: undefined, ctx: Context) => {
      return ctx.prisma.link.findMany();
    },
  },
};
