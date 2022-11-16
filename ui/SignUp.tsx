'use client';

import { CREATE_USER } from '#/graphql/Mutation/mutation';
import { useMutation } from '@apollo/client';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

export default function SignUp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const [resultCreateUser] = useMutation(CREATE_USER);
  const createUser = async () => {
    resultCreateUser({
      variables: {
        id: Math.floor(Math.random() * 10000).toString() as string,
        email,
        password,
      },
    });
    setEmail('');
    setPassword('');
    router.push('/to-do');
  };
  return (
    <div className="container h-full px-6 py-12">
      <div className="g-6 flex h-full flex-wrap items-center justify-center text-gray-800">
        <div className="mb-12 md:mb-0 md:w-8/12 lg:w-6/12">
          <img
            src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
            className="w-full"
            alt="Phone image"
          />
        </div>
        <div className="md:w-8/12 lg:ml-20 lg:w-5/12">
          <form>
            <div className="mb-6">
              <input
                type="text"
                className="form-control m-0 block w-full rounded border border-solid border-gray-300 bg-white bg-clip-padding px-4 py-2 text-xl font-normal text-gray-700 transition ease-in-out focus:border-blue-600 focus:bg-white focus:text-gray-700 focus:outline-none"
                placeholder="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="mb-6">
              <input
                type="password"
                className="form-control m-0 block w-full rounded border border-solid border-gray-300 bg-white bg-clip-padding px-4 py-2 text-xl font-normal text-gray-700 transition ease-in-out focus:border-blue-600 focus:bg-white focus:text-gray-700 focus:outline-none"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <button
              type="submit"
              className="inline-block w-full rounded bg-blue-600 px-7 py-3 text-sm font-medium uppercase leading-snug text-white shadow-md transition duration-150 ease-in-out hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg"
              data-mdb-ripple="true"
              data-mdb-ripple-color="light"
              onClick={createUser}
            >
              Sign in
            </button>

            <div className="my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-gray-300 after:mt-0.5 after:flex-1 after:border-t after:border-gray-300">
              <p className="mx-4 mb-0 text-center font-semibold">OR</p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
