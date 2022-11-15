'use client';
import { CREATE_TASK } from '#/graphql/Mutation/mutation';
import { getTasks } from '#/graphql/Query/queries';
import { useMutation } from '@apollo/client';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function Page() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const router = useRouter();

  const [resultCreateTask] = useMutation(CREATE_TASK, {
    refetchQueries: [{ query: getTasks }, 'getTasks'],
  });
  const addTask = async () => {
    resultCreateTask({
      variables: {
        id: Math.floor(Math.random() * 10000).toString() as string,
        title,
        content,
      },
    });
    setTitle('');
    setContent('');
    router.push('/to-do');
  };

  return (
    <div className="grid grid-cols-1 gap-2">
      <div className="mb-6">
        <input
          className="w-full appearance-none rounded border-2 border-gray-200 bg-gray-200 py-2 px-4 leading-tight text-gray-700 focus:border-purple-500 focus:bg-white focus:outline-none"
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className="mb-6">
        <textarea
          className="w-full appearance-none rounded border-2 border-gray-200 bg-gray-200 py-2 px-4 leading-tight text-gray-700 focus:border-purple-500 focus:bg-white focus:outline-none"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Content"
        />
      </div>
      <div className="md:flex md:items-center">
        <div className="md:w-1/3"></div>
        <div className="md:w-2/3">
          <button
            className="focus:shadow-outline rounded py-2 px-4 font-bold text-white shadow hover:bg-blue-500 focus:outline-none"
            onClick={addTask}
          >
            Create a task
          </button>
        </div>
      </div>
    </div>
  );
}
