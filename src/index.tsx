import { createRoot } from 'react-dom/client';
import { StrictMode } from 'react';

import { ThemeProvider } from '@/app/providers/ThemeProvider';
import { App } from '@/app/App';

let domNode = document.getElementById('root');

if (!domNode) {
  domNode = document.createElement('div');
  domNode.setAttribute('id', 'root');
  document.body.appendChild(domNode);
}

const root = createRoot(domNode);

root.render(
  <StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </StrictMode>
);