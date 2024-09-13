import { createRoot } from 'react-dom/client';
import { App } from '@/app/App';
import { StrictMode } from 'react';

let domNode = document.getElementById('root');

if (!domNode) {
  domNode = document.createElement('div');
  domNode.setAttribute('id', 'root');
  document.body.appendChild(domNode);
}

const root = createRoot(domNode);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);