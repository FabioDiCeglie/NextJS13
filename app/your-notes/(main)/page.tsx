import { collection, getDocs } from 'firebase/firestore';
import { database } from '../../../fireBaseConfig';
import Note from './Note';

const databaseRef = collection(database, 'Notes');
export const getData = async () => {
  return await getDocs(databaseRef).then((resp) =>
    resp.docs.map((e) => e.data()),
  );
};

export default async function Page() {
  const notes = await getData();

  return (
    <div className="space-y-4">
      <div className="text-xl font-medium text-gray-500">Your Notes</div>

      <div>
        <div className="grid grid-cols-2 gap-4">
          {notes?.map((note) => {
            return (
              <div>
                <Note key={note.id} note={note} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
