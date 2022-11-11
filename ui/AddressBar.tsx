'use client';

import React from 'react';
import { usePathname, useSearchParams } from 'next/navigation';

const AddressBar = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  return <div></div>;
};

export default AddressBar;
