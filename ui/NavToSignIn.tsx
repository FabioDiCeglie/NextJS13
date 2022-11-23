export const SignIn = () => (
  <div>
    <div className="mb-10 w-32 max-w-sm rounded-lg border border-gray-200 bg-white p-6 shadow-md dark:border-gray-700 dark:bg-gray-800 md:w-full lg:w-full">
      <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
        You need to Sign In
      </p>
      <div className="mt-4 flex space-x-3 md:mt-6">
        <a
          href={`/api/auth/signin`}
          className="inline-flex items-center rounded-lg bg-blue-700 px-4 py-2 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Sign In
        </a>
      </div>
    </div>
  </div>
);
