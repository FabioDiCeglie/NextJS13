import { IncomingMessage } from 'http';
import { getSession } from 'next-auth/react';

export const getUserSession = async (req: IncomingMessage | undefined) => {
  return await getSession({ req });
};
