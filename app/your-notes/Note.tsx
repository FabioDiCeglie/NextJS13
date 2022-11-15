'use client';

import { DELETE_NOTE } from '#/graphql/Mutation/mutation';
import { AllNotesQuery } from '#/graphql/Query/queries';
import { Notes } from '#/lib/types';
import { useMutation, useQuery } from '@apollo/client';
import { useRouter } from 'next/navigation';

export default function Note() {
  const { data, loading, error } = useQuery(AllNotesQuery);
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
          <h1 className="text-s font-medium text-gray-500">Title: </h1>
          <h2 className="text-s font-medium text-white">{title}</h2>
          <h1 className="text-s font-medium text-gray-500">Content: </h1>
          <h5 className="text-s font-medium text-white">{content}</h5>
          <br />
          <div>
            <button
              className="rounded border border-gray-400 bg-white py-2 px-4 font-semibold text-gray-800 shadow hover:bg-gray-100"
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
