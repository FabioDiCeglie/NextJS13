import { makeExecutableSchema } from '@graphql-tools/schema';
import { DateTimeResolver } from 'graphql-scalars';
import { Context } from './context';

const typeDefs = `
type Mutation {
  createDraft(authorEmail: String!, data: PostCreateInput!): Post
  deletePost(id: Int!): Post
  signupUser(data: UserCreateInput!): User!
}
type Post {
  author: User
  content: String
  createdAt: DateTime!
  id: Int!
  published: Boolean!
  title: String!
  updatedAt: DateTime!
  viewCount: Int!
}
input PostCreateInput {
  content: String
  title: String!
}
input PostOrderByUpdatedAtInput {
  updatedAt: SortOrder!
}
type Query {
  allUsers: [User!]!
  draftsByUser(userUniqueInput: UserUniqueInput!): [Post]
  feed(orderBy: PostOrderByUpdatedAtInput, searchString: String, skip: Int, take: Int): [Post!]!
  postById(id: Int): Post
}
enum SortOrder {
  asc
  desc
}
type User {
  email: String!
  id: Int!
  name: String
  posts: [Post!]!
}
input UserCreateInput {
  email: String!
  name: String
  posts: [PostCreateInput!]
}
input UserUniqueInput {
  email: String
  id: Int
}
scalar DateTime
`;

const resolvers = {
  Query: {
    allUsers: (_parent: any, _args: undefined, context: Context) => {
      return context.prisma.user.findMany();
    },
    postById: (_parent: undefined, args: { id: number }, context: Context) => {
      return context.prisma.post.findUnique({
        where: { id: args.id || undefined },
      });
    },
    feed: (
      _parent: undefined,
      args: {
        searchString: string;
        skip: number;
        take: number;
        orderBy: PostOrderByUpdatedAtInput;
      },
      context: Context,
    ) => {
      const or = args.searchString
        ? {
            OR: [
              { title: { contains: args.searchString } },
              { content: { contains: args.searchString } },
            ],
          }
        : {};

      return context.prisma.post.findMany({
        where: {
          published: true,
          ...or,
        },
        take: args?.take,
        skip: args?.skip,
        orderBy: args?.orderBy,
      });
    },
    draftsByUser: (
      _parent: undefined,
      args: { userUniqueInput: UserUniqueInput },
      context: Context,
    ) => {
      return context.prisma.user
        .findUnique({
          where: {
            id: args.userUniqueInput.id || undefined,
            email: args.userUniqueInput.email || undefined,
          },
        })
        .posts({
          where: {
            published: false,
          },
        });
    },
  },
  Mutation: {
    signupUser: (
      _parent: undefined,
      args: { data: UserCreateInput },
      context: Context,
    ) => {
      const postData = args.data.posts?.map((post) => {
        return { title: post.title, content: post.content || undefined };
      });

      return context.prisma.user.create({
        data: {
          name: args.data.name,
          email: args.data.email,
          posts: {
            create: postData,
          },
        },
      });
    },
    createDraft: (
      _parent: undefined,
      args: { data: PostCreateInput; authorEmail: string },
      context: Context,
    ) => {
      return context.prisma.post.create({
        data: {
          title: args.data.title,
          content: args.data.content,
          author: {
            connect: { email: args.authorEmail },
          },
        },
      });
    },
    deletePost: (_parent, args: { id: number }, context: Context) => {
      return context.prisma.post.delete({
        where: { id: args.id },
      });
    },
  },
  DateTime: DateTimeResolver,
  Post: {
    author: (parent: undefined, _args: undefined, context: Context) => {
      return context.prisma.post
        .findUnique({
          where: { id: parent?.id },
        })
        .author();
    },
  },
  User: {
    posts: (parent: undefined, _args: undefined, context: Context) => {
      return context.prisma.user
        .findUnique({
          where: { id: parent?.id },
        })
        .posts();
    },
  },
};

enum SortOrder {
  asc = 'asc',
  desc = 'desc',
}

interface PostOrderByUpdatedAtInput {
  updatedAt: SortOrder;
}

interface UserUniqueInput {
  id?: number;
  email?: string;
}

interface PostCreateInput {
  title: string;
  content?: string;
}

interface UserCreateInput {
  email: string;
  name?: string;
  posts?: PostCreateInput[];
}

export const schema = makeExecutableSchema({
  resolvers,
  typeDefs,
});
