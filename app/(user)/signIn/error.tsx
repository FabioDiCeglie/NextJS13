'use client';

import React from 'react';
import { Boundary } from '../../../ui/Boundary';

export default function Error({ error, reset }: any) {
  React.useEffect(() => {
    console.log('logging error:', error);
  }, [error]);

  return (
    <Boundary labels={['Home page Error UI']} color="pink">
      <div className="space-y-4">
        <div className="text-sm text-vercel-pink">
          <strong className="font-bold">Error:</strong> {error?.message}
        </div>
        <div>
          <button
            className="rounded border border-gray-400 bg-white py-2 px-4 font-semibold text-gray-800 shadow hover:bg-gray-100"
            onClick={() => reset()}
          >
            Try Again
          </button>
        </div>
      </div>
    </Boundary>
  );
}
