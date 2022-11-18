'use client';

import { demos } from '#/lib/dummyData';
import UserCard from '#/ui/UserCard';
import clsx from 'clsx';
import { useSession } from 'next-auth/react';
import Link from 'next/link';
import { useSelectedLayoutSegments } from 'next/navigation';

export default function GlobalNav() {
  const { data: session } = useSession();
  const [selectedLayoutSegments] = useSelectedLayoutSegments();

  return (
    <>
      {session ? (
        <UserCard session={session} />
      ) : (
        <Link
          href={`/api/auth/signin`}
          className={clsx(
            'block rounded-md px-3 py-2 text-sm font-medium text-gray-100 hover:bg-gray-800 hover:text-gray-100',
          )}
        >
          Sign In
        </Link>
      )}
      <div className="space-y-5">
        {demos.map((demo) => {
          return (
            <div key={demo.name}>
              <div className="mb-2 px-3 text-xs font-semibold uppercase tracking-wider text-gray-500">
                <div>{demo.name}</div>
              </div>

              {demo.items.map((item) => {
                const isActive = item.slug === selectedLayoutSegments;

                return (
                  <div key={item.slug}>
                    {item.isDisabled ? (
                      <div
                        className="block rounded-md px-3 py-2 text-sm font-medium text-gray-600"
                        title="Coming Soon"
                      >
                        {item.name}
                      </div>
                    ) : (
                      <Link
                        href={`/${item.slug}`}
                        className={clsx(
                          'block rounded-md px-3 py-2 text-sm font-medium hover:bg-gray-800 hover:text-gray-100',
                          {
                            'text-gray-400': !isActive,
                            'text-white': isActive,
                          },
                        )}
                      >
                        {item.name}
                      </Link>
                    )}
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    </>
  );
}
