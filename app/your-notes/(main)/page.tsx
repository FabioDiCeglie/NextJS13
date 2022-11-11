import Link from 'next/link';

export default function Page() {
  return (
    <div className="space-y-4">
      <div className="text-xl font-medium text-gray-500">Your Notes</div>

      <div>
        {/* <div className={styles.grid}>
          {notes?.map((note) => {
            return <Note key={note.id} note={note} />;
          })}
        </div> */}
      </div>
      <div className="space-y-4"></div>
    </div>
  );
}

function Note({ note }: any) {
  const { id, title, content, created } = note || {};

  return (
    <Link href={`/notes/${id}`}>
      <div>
        <h2>{title}</h2>
        <h5>{content}</h5>
        <p>{created}</p>
      </div>
    </Link>
  );
}
