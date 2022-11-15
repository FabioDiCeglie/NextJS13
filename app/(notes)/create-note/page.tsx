'use client';
import { CREATE_NOTE } from '#/graphql/Mutation/mutation';
import { AllNotesQuery } from '#/graphql/Query/queries';
import { useMutation } from '@apollo/client';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function Page() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const router = useRouter();

  const [resultCreateNote] = useMutation(CREATE_NOTE, {
    refetchQueries: [{ query: AllNotesQuery }, 'AllNotesQuery'],
  });
  const addNote = async () => {
    resultCreateNote({
      variables: {
        id: Math.floor(Math.random() * 10000).toString() as string,
        title,
        content,
      },
    });
    setTitle('');
    setContent('');
    router.push('/your-notes');
  };

  return (
    <>
      <div className="mb-6 md:flex md:items-center">
        <div className="md:w-1/3">
          <label className="mb-1 block pr-4 font-bold text-gray-500 md:mb-0 md:text-right">
            Title
          </label>
        </div>
        <div className="md:w-2/3">
          <input
            className="w-full appearance-none rounded border-2 border-gray-200 bg-gray-200 py-2 px-4 leading-tight text-gray-700 focus:border-purple-500 focus:bg-white focus:outline-none"
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
      </div>
      <div className="mb-6 md:flex md:items-center">
        <div className="md:w-1/3">
          <label className="mb-1 block pr-4 font-bold text-gray-500 md:mb-0 md:text-right">
            Content
          </label>
        </div>
        <div className="md:w-2/3">
          <textarea
            className="w-full appearance-none rounded border-2 border-gray-200 bg-gray-200 py-2 px-4 leading-tight text-gray-700 focus:border-purple-500 focus:bg-white focus:outline-none"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Content"
          />
        </div>
      </div>
      <div className="md:flex md:items-center">
        <div className="md:w-1/3"></div>
        <div className="md:w-2/3">
          <button
            className="focus:shadow-outline rounded py-2 px-4 font-bold text-white shadow hover:bg-blue-500 focus:outline-none"
            onClick={addNote}
          >
            Create a note
          </button>
        </div>
      </div>
    </>
  );
}
