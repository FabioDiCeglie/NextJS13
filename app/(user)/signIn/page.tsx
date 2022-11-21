import { getProviders, signIn } from 'next-auth/react';
import Form from './Form';

export default async function Page() {
  const providers = await getProviders();
  return (
    <>
      <Form providers={providers} />
    </>
  );
}
