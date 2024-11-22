// src/index.tsx
import React from 'react';
import ReactDOM from 'react-dom/client';  // React 18 and later uses this
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import './index.css';

const rootElement = document.getElementById('root');
if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);  // Correct use for React 18
  root.render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
} else {
  console.error('Root element not found.');
}
