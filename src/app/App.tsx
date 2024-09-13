import './styles/index.css';

import {
  createBrowserRouter,
  Outlet,
  RouterProvider
} from 'react-router-dom';

import { NotFoundPage } from '@/pages/NotFoundPage';
import { Link } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>
      Hello world!
      <Link to={'/'}>Главная</Link>
      <Link to={'/about'}>О нас</Link>
      <Link to={'/notFoundPage'}>Куда-то в пустоту</Link>
      <Outlet />
    </div>,
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
        element: <NotFoundPage />,
      }
    ]
  },
]);

export const App = () => {
  return (
    <RouterProvider router={router} />
  );
};