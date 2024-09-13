import './styles/index.css';
import '@/shared/config/i18n/i18n';

import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
  useRouteError
} from 'react-router-dom';

import { NotFoundPage } from '@/pages/NotFoundPage';
import { LangSwitcher } from '@/features/LangSwitcher';
import { Suspense } from 'react';
import { AppNav } from '@/features/AppNav';

function ErrorBoundary() {
  let error = useRouteError();
  console.error(error);
  // Uncaught ReferenceError: path is not defined
  return <div>Dang!</div>;
}

const router = createBrowserRouter([
  {
    path: "/",
    element: (<div>
      Hello world!
      <Suspense fallback={<div>Loading</div>}>
        <LangSwitcher size='md' variant='outline' />
      </Suspense>
      <AppNav />
      <Outlet />
    </div>),
    errorElement: <ErrorBoundary />,
    children: [
      {
        index: true,
        element: <div>Main page</div>,
      },
      {
        path: '/about',
        element: <div>Main page</div>,
      },
      {
        path: "/*",
        element: (<Suspense fallback={<div>Loading</div>}>
          <NotFoundPage />
        </Suspense>),
      }
    ]
  },
]);

export const App = () => {
  return (
    <RouterProvider router={router} />
  );
};