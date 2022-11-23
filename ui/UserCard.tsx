import { signOut } from 'next-auth/react';

export default function UserCard({ session }: any) {
  return (
    <div className="mb-4 hidden w-full max-w-sm rounded-lg border border-gray-200 bg-white shadow-md dark:border-gray-700 dark:bg-gray-800 md:block">
      <div className="mt-3 hidden flex-col items-center pb-10 md:flex">
        <img
          className="mb-3 hidden h-24 w-24 rounded-full shadow-lg md:block"
          src={session.user?.image ?? undefined}
          alt="Bonnie image"
        />
        <h5 className="mb-1 hidden text-xl font-medium text-gray-900 dark:text-white md:block">
          {session.user?.name}
        </h5>

        <div className="mt-4 flex space-x-3 md:mt-6">
          <button
            onClick={() => signOut()}
            className="inline-flex items-center rounded-lg bg-blue-700 px-4 py-2 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Log Out
          </button>
        </div>
      </div>
    </div>
  );
}
