'use client';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function Page() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const router = useRouter();

  // const create = async () => {
  //   // const db = new PocketBase('http://127.0.0.1:8090');
  //   // await db.records.create('notes', {
  //   //   title,
  //   //   content,
  //   // });

  //   await fetch('http://127.0.0.1:8090/api/collections/notes/records', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify({
  //       title,
  //       content,
  //     }),
  //   });

  //   setContent('');
  //   setTitle('');

  //   router.refresh();
  // };
  return (
    <div className="space-y-4">
      <div className="text-xl font-medium text-gray-500">Create your notes</div>

      <form className="w-full max-w-sm">
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
              className="focus:shadow-outline rounded py-2 px-4 font-bold text-white shadow hover:bg-purple-400 focus:outline-none"
              type="button"
            >
              Create a notes
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
