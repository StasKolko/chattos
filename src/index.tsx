import '@/app/styles/index.css';
import '@/shared/config/i18n/i18n';

import { createRoot } from 'react-dom/client';
import { StrictMode } from 'react';

import { ThemeProvider } from '@/app/providers/ThemeProvider';
import { appRoutes } from '@/app/routes';
import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom';
import { themeColors } from '@/shared/lib/theme';

let domNode = document.getElementById('root');

if (!domNode) {
  domNode = document.createElement('div');
  domNode.setAttribute('id', 'root');
  document.body.appendChild(domNode);
}

const root = createRoot(domNode);

const AppRouter = createBrowserRouter(appRoutes)

root.render(
  <StrictMode>
    <ThemeProvider disableTransitionOnChange themeColors={themeColors}>
      <RouterProvider router={AppRouter} />
    </ThemeProvider>
  </StrictMode>
);