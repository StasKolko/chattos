import { Outlet } from 'react-router-dom';

import { Suspense } from 'react';
import { Header } from '@/widgets/Header';

export const App = () => {
  return (
    <>
      {/* eslint-disable-next-line */}
      <Suspense fallback={<div>Loading</div>}>
        <Header />
        <Outlet />
      </Suspense>
    </>
  );
};