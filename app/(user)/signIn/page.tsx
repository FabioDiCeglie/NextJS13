import { getProviders } from 'next-auth/react';
import SignIn from '../../../ui/SignIn';

export default async function Page() {
  const providers = await getProviders();

  return (
    <>
      <SignIn providers={providers} />
    </>
  );
}
