import { getUserSession } from '#/lib/helpers';
import { Context } from '@apollo/client';

// The context argument is helpful for passing things that any resolver might need, like authentication scope, database connections, and custom fetch functions.
// Here we are using it to access Prisma Client.
export const resolvers = {
  Query: {
    notes: async (_parent: undefined, _args: undefined, ctx: Context) => {
      const session = await getUserSession(ctx.req);
      return ctx.prisma.note.findMany({
        where: {
          author: { email: session?.user?.email },
        },
      });
    },
    tasks: async (_parent: undefined, _args: undefined, ctx: Context) => {
      const session = await getUserSession(ctx.req);
      return ctx.prisma.toDo.findMany({
        where: {
          author: { email: session?.user?.email },
        },
      });
    },
  },
  Mutation: {
    createNote: async (
      _parent: undefined,
      args: { id: string; title: string; content: string },
      ctx: Context,
    ) => {
      const session = await getUserSession(ctx.req);
      return ctx.prisma.note.create({
        data: {
          id: args.id,
          title: args.title,
          content: args.content,
          author: { connect: { email: session?.user?.email } },
        },
      });
    },
    deleteNote: (_parent: undefined, args: { id: string }, ctx: Context) => {
      return ctx.prisma.note.delete({
        where: { id: args.id },
      });
    },
    deleteTask: (_parent: undefined, args: { id: string }, ctx: Context) => {
      return ctx.prisma.toDo.delete({
        where: { id: args.id },
      });
    },
    createTask: async (
      _parent: undefined,
      args: { id: string; title: string; content: string },
      ctx: Context,
    ) => {
      const session = await getUserSession(ctx.req);
      return ctx.prisma.toDo.create({
        data: {
          id: args.id,
          title: args.title,
          content: args.content,
          author: { connect: { email: session?.user?.email } },
        },
      });
    },
  },
};
