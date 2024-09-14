import '@/app/styles/index.css';
import '@/shared/config/i18n/i18n';

import { createRoot } from 'react-dom/client';

import { appRoutes } from '@/app/routes';
import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom';
import { AppProvider } from './app/providers/AppProvider/ui/AppProvider';

let domNode = document.getElementById('root');

if (!domNode) {
  domNode = document.createElement('div');
  domNode.setAttribute('id', 'root');
  document.body.appendChild(domNode);
}

const root = createRoot(domNode);

const AppRouter = createBrowserRouter(appRoutes);

root.render(
  <AppProvider>
    <RouterProvider router={AppRouter} />
  </AppProvider>
);