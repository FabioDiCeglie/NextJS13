'use client';
import { deleteDoc, doc, collection } from 'firebase/firestore';
import { useRouter } from 'next/navigation';
import { database } from '../../fireBaseConfig';

export default function Note({ note }: any) {
  const { title, content } = note;
  const databaseRef = collection(database, 'Notes');
  const router = useRouter();

  const deleteNote = async (title: string, e: any) => {
    e.preventDefault();
    deleteDoc(doc(databaseRef, title))
      .then(() => {
        console.log('DELETED');
        router.refresh();
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
          onClick={(e) => deleteNote(title, e)}
        >
          Delete Note
        </button>
      </div>
    </div>
  );
}
