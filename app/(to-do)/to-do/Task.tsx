'use client';

import { DELETE_TASK } from '#/graphql/Mutation/mutation';
import { getTasks } from '#/graphql/Query/queries';
import { Tasks } from '#/lib/types';
import { EmptyDashboard } from '#/ui/EmptyDashboard';
import { NavToSignIn } from '#/ui/NavToSignIn';
import PaginationComponent from '#/ui/Pagination';
import { SkeletonCard } from '#/ui/SkeletonCard';
import { useMutation, useQuery } from '@apollo/client';
import { useSession } from 'next-auth/react';
import { useState } from 'react';

export default function Task() {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [tasksPerPage] = useState<number>(2);
  const { data: session } = useSession();
  const { data, loading } = useQuery(getTasks);
  const [resultDeleteTask] = useMutation(DELETE_TASK, {
    refetchQueries: [{ query: getTasks }, 'getTasks'],
  });

  const deleteTask = async (id: String) => {
    resultDeleteTask({
      variables: {
        id,
      },
    });
  };

  if (!session) return <NavToSignIn />;
  if (loading) return <SkeletonCard />;
  if (data.tasks.length === 0) return <EmptyDashboard />;

  const tasks = data.tasks;
  const indexOfLastTasks = currentPage * tasksPerPage;
  const indexOfFirstTasks = indexOfLastTasks - tasksPerPage;
  const currentTasks = tasks.slice(indexOfFirstTasks, indexOfLastTasks);
  //Change page
  const paginateFront = () => setCurrentPage(currentPage + 1);
  const paginateBack = () => setCurrentPage(currentPage - 1);

  return (
    <div>
      <PaginationComponent
        paginateBack={paginateBack}
        paginateFront={paginateFront}
        currentPage={currentPage}
        totalNumbers={tasks.length}
        indexOfLasts={indexOfLastTasks}
      />
      {currentTasks.map(({ title, content, id }: Tasks) => (
        <div key={id as string}>
          <div className="mb-10 w-40 max-w-sm rounded-lg border border-gray-200 bg-white p-6 shadow-md dark:border-gray-700 dark:bg-gray-800 md:w-full lg:w-full">
            <h5 className="mb-2 text-sm font-bold tracking-tight text-gray-900 dark:text-white md:text-2xl">
              {title}
            </h5>

            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              {content}
            </p>
            <button
              className="inline-flex items-center rounded-lg bg-blue-700 py-2 px-3 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              onClick={() => deleteTask(id)}
            >
              Delete task
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
