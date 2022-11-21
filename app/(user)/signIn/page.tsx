import { getProviders } from 'next-auth/react';
import Form from '../../../ui/SignIn';

export default async function Page() {
  const providers = await getProviders();
  return (
    <>
      <Form providers={providers} />
    </>
  );
}
