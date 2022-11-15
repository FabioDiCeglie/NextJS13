'use client';

import { DELETE_NOTE } from '#/graphql/Mutation/mutation';
import { AllNotesQuery } from '#/graphql/Query/queries';
import { Notes } from '#/lib/types';
import { useMutation, useQuery } from '@apollo/client';
import { useRouter } from 'next/navigation';

export default function Note() {
  const { data } = useQuery(AllNotesQuery);
  const [resultDeleteNote] = useMutation(DELETE_NOTE, {
    refetchQueries: [{ query: AllNotesQuery }, 'AllNotesQuery'],
  });
  const router = useRouter();

  const deleteNote = async (id: String) => {
    resultDeleteNote({
      variables: {
        id,
      },
    }).then(() => router.refresh());
  };

  return (
    <div>
      {data?.notes?.map(({ title, content, id }: Notes) => (
        <div key={id as string}>
          <div className="max-w-sm rounded-lg border border-gray-200 bg-white p-6 shadow-md dark:border-gray-700 dark:bg-gray-800">
            <a href="#">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {title}
              </h5>
            </a>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              {content}
            </p>
            <a
              href="#"
              className="inline-flex items-center rounded-lg bg-blue-700 py-2 px-3 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              onClick={() => deleteNote(id)}
            >
              Delete Note
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}
