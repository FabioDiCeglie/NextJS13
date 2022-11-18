'use client';

import { DELETE_NOTE } from '#/graphql/Mutation/mutation';
import { getNotes } from '#/graphql/Query/queries';
import { Notes } from '#/lib/types';
import { EmptyDashboard } from '#/ui/EmptyDashboard';
import { SignIn } from '#/ui/SignIn';
import { SkeletonCard } from '#/ui/SkeletonCard';
import { useMutation, useQuery } from '@apollo/client';
import { useSession } from 'next-auth/react';

export default function Note() {
  const { data: session } = useSession();
  const { data, loading } = useQuery(getNotes);
  const [resultDeleteNote] = useMutation(DELETE_NOTE, {
    refetchQueries: [{ query: getNotes }, 'AllNotesQuery'],
  });

  const deleteNote = async (id: String) => {
    resultDeleteNote({
      variables: {
        id,
      },
    });
  };

  if (!session) return <SignIn />;
  if (loading) return <SkeletonCard />;
  if (data?.notes.length === 0) return <EmptyDashboard />;

  return (
    <div>
      {data?.notes?.map(({ title, content, id }: Notes) => (
        <div key={id as string}>
          <div className="mb-10 max-w-sm rounded-lg border border-gray-200 bg-white p-6 shadow-md dark:border-gray-700 dark:bg-gray-800">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {title}
            </h5>

            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              {content}
            </p>
            <button
              className="inline-flex items-center rounded-lg bg-blue-700 py-2 px-3 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              onClick={() => deleteNote(id)}
            >
              Delete Note
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
