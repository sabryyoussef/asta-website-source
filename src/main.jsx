import React from 'react';
import { createRoot } from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter } from 'react-router-dom';
import App from './layout/App.jsx';
import './style/App.css';
import './style/fontawesome.css';
import './i18n';

// If async-CSS plugin hid the page until CSS loads, ensure we show it once the app mounts
// (avoids permanent white page when main CSS fails to load or onload never fires)
document.documentElement.classList.remove('await-main-css');

createRoot(document.getElementById('root')).render(
    <BrowserRouter>
      <HelmetProvider>
        <App />
      </HelmetProvider>
    </BrowserRouter>
);
