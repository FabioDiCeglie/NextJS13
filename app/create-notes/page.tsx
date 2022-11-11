'use client';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { collection, addDoc } from 'firebase/firestore';
import { database } from '../../fireBaseConfig';
import { Alert } from './Alert';

export default function Page() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [alert, setAlert] = useState(false);
  const router = useRouter();
  const databaseRef = collection(database, 'Notes');

  const addNote = () => {
    addDoc(databaseRef, {
      id: `${Math.floor(Math.random() * 100)}`,
      title: title,
      content: content,
    })
      .then(() => {
        alert;
        setTitle('');
        setContent('');
        setAlert(true);
        router.refresh();
      })
      .catch((e) => console.error(e));
  };

  return (
    <div className="space-y-4">
      {alert ? <Alert /> : ''}
      <div className="text-xl font-medium text-gray-500">Create your notes</div>

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
            onClick={addNote}
          >
            Create a note
          </button>
        </div>
      </div>
    </div>
  );
}
