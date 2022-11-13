export default async function Page() {
  return (
    <div className="space-y-4">
      <div className="text-xl font-medium text-gray-500">Your To-do List</div>

      <div>
        <div>
          <div className="grid grid-cols-2 gap-4">
            {/* {todo?.map((todo) => (
              <div>
                <ul className="max-w-md list-inside list-disc space-y-1 text-gray-500 dark:text-gray-400">
                  <li>{todo.ToDo}</li>
                </ul>
              </div>
            ))} */}
          </div>
        </div>
      </div>
    </div>
  );
}
