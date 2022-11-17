import { PrismaClient } from '@prisma/client';
import { Session } from 'next-auth';
import { getSession } from 'next-auth/react';
import prisma from '../lib/prisma';

// We create context so that the resolvers have access to the Prisma Client
// and be able send queries to the database.

export type Context = {
  prisma: PrismaClient;
  session: Session | null;
};
export async function createContext({ req, res }: any): Promise<Context> {
  const session = await getSession({ req });
  return {
    prisma,
    session,
  };
}
