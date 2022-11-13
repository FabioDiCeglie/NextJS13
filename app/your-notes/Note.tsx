'use client';
import { gql, useQuery } from '@apollo/client';

const AllNotesQuery = gql`
  query {
    notes {
      id
      title
      content
    }
  }
`;

export default function Note() {
  const { data, loading, error } = useQuery(AllNotesQuery);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Oh no... {error.message}</p>;
  return (
    <div>
      {data.notes?.map(({ title, content }: any) => (
        <div>
          <h1 className="text-s font-medium text-gray-500">Title: </h1>
          <h2 className="text-s font-medium text-white">{title}</h2>
          <h1 className="text-s font-medium text-gray-500">Content: </h1>
          <h5 className="text-s font-medium text-white">{content}</h5>
          <br />
          <div>
            <button className="rounded border border-gray-400 bg-white py-2 px-4 font-semibold text-gray-800 shadow hover:bg-gray-100">
              Delete Note
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
