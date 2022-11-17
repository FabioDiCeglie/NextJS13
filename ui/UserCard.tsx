import { signOut } from 'next-auth/react';

export default function UserCard({ session }: any) {
  return (
    <div className="mb-4 w-full max-w-sm rounded-lg border border-gray-200 bg-white shadow-md dark:border-gray-700 dark:bg-gray-800">
      <div className="mt-3 flex flex-col items-center pb-10">
        <img
          className="mb-3 h-24 w-24 rounded-full shadow-lg"
          src={session.user?.image ?? undefined}
          alt="Bonnie image"
        />
        <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
          {session.user?.name}
        </h5>

        <div className="mt-4 flex space-x-3 md:mt-6">
          <a
            href={`/`}
            onClick={() => signOut()}
            className="inline-flex items-center rounded-lg bg-blue-700 px-4 py-2 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Log Out
          </a>
        </div>
      </div>
    </div>
  );
}
