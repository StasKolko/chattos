import {
  RouteObject
} from 'react-router-dom';

import { NotFoundPage } from '@/pages/NotFoundPage';
import { Suspense } from 'react';
import { App } from '../App';
import { AboutPage } from '@/pages/AboutPage';
import MainPage from '@/pages/MainPage/ui/MainPage';
import { ErrorPage } from '@/pages/ErrorPage';

// function ErrorBoundary() {
//   const error = useRouteError();
//   console.error(error);
//   // Uncaught ReferenceError: path is not defined
//   // eslint-disable-next-line
//   return <div>Dang! </div>;
// }

export const appRoutes: RouteObject[] = [
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        errorElement: <ErrorPage />,
        element: (
          // eslint-disable-next-line
          <Suspense fallback={<div>Loading</div>}>
            <MainPage />
          </Suspense>
        ),
      },
      {
        path: '/about',
        element: (
          // eslint-disable-next-line
          <Suspense fallback={<div>Loading</div>}>
            <AboutPage />
          </Suspense>
        )
      },
      {
        path: '/*',
        element: (
          // eslint-disable-next-line
          <Suspense fallback={<div>Loading</div>}>
            <NotFoundPage />
          </Suspense>
        ),
      }
    ]
  }
];