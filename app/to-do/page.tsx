import { getToDo } from '#/lib/hooks';

export default async function Page() {
  const todo = await getToDo();
  return (
    <div className="space-y-4">
      <div className="text-xl font-medium text-gray-500">Your To-do List</div>

      <div>
        <div>
          <div className="grid grid-cols-2 gap-4">
            {todo?.map((todo) => (
              <div>
                <h1 className="text-s font-medium text-gray-500">
                  {todo.ToDo}
                </h1>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
