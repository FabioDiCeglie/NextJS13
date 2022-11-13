import { PrismaClient } from '@prisma/client';
import prisma from '../lib/prisma';

// We create context so that the resolvers have access to the Prisma Client
// and be able send queries to the database.

export type Context = {
  prisma: PrismaClient;
};
export async function createContext({ req, res }: any): Promise<Context> {
  return {
    prisma,
  };
}
