import { getNotes } from '#/lib/hooks';
import Note from './Note';

export default async function Page() {
  const notes = await getNotes();

  return (
    <div className="space-y-4">
      <div className="text-xl font-medium text-gray-500">Your Notes</div>

      <div>
        <div className="grid grid-cols-2 gap-4">
          {notes?.map((note) => (
            <div>
              <Note key={note.id} note={note} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
