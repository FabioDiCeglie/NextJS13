import { collection, getDocs } from 'firebase/firestore';
import { database } from '../../../fireBaseConfig';
const databaseRef = collection(database, 'Notes');
const getData = async () => {
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
        <div>
          {notes?.map((note) => {
            return <Note key={note.id} note={note} />;
          })}
        </div>
      </div>
    </div>
  );
}

function Note({ note }: any) {
  const { title, content } = note || {};

  return (
    <div>
      <h1 className="text-s font-medium text-gray-500">Title: </h1>
      <h2 className="text-s font-medium text-white">{title}</h2>
      <h1 className="text-s font-medium text-gray-500">Content: </h1>
      <h5 className="text-s font-medium text-white">{content}</h5>
      <br />
    </div>
  );
}
