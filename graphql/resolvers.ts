import { Context } from '@apollo/client';

// The context argument is helpful for passing things that any resolver might need, like authentication scope, database connections, and custom fetch functions.
// Here we are using it to access Prisma Client.
export const resolvers = {
  Query: {
    notes: (_parent: undefined, _args: undefined, ctx: Context) => {
      const session = ctx.session;
      if (!session) {
        return { notes: [] };
      }
      return ctx.prisma.note.findMany({
        where: {
          author: { email: session.user.email },
        },
      });
    },
    tasks: (_parent: undefined, _args: undefined, ctx: Context) => {
      return ctx.prisma.toDo.findMany();
    },
  },
  Mutation: {
    createNote: async (
      _parent: undefined,
      args: { id: string; title: string; content: string },
      ctx: Context,
    ) => {
      return ctx.prisma.note.create({
        data: {
          id: args.id,
          title: args.title,
          content: args.content,
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
    createTask: (
      _parent: undefined,
      args: { id: string; title: string; content: string },
      ctx: Context,
    ) => {
      return ctx.prisma.toDo.create({
        data: {
          id: args.id,
          title: args.title,
          content: args.content,
        },
      });
    },
    createUser: (
      _parent: undefined,
      args: { id: string; email: string; password: string },
      ctx: Context,
    ) => {
      return ctx.prisma.user.create({
        data: {
          id: args.id,
          email: args.email,
          password: args.password,
        },
      });
    },
  },
};
