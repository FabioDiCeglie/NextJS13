'use client';
import { deleteDoc, doc } from 'firebase/firestore';
import { database } from '../../../fireBaseConfig';
import { getData } from './page';

export default function Note({ note }: any) {
  const { title, content, id } = note || {};

  const deleteNote = async (id: string) => {
    console.log(id);
    let note = doc(database, 'Notes', id);
    deleteDoc(note)
      .then(() => {
        getData();
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <div>
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
  );
}
