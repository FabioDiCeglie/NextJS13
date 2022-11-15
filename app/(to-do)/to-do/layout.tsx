import { Boundary } from '#/ui/Boundary';
import React from 'react';

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Boundary
      labels={['main layout']}
      color="orange"
      animateRerendering={false}
    >
      <div className="space-y-9">
        <div>{children}</div>
      </div>
    </Boundary>
  );
}
