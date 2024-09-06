import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import './css/style.css';
import './css/satoshi.css';
import 'jsvectormap/dist/css/jsvectormap.css';
import 'flatpickr/dist/flatpickr.min.css';
import { PrimeReactProvider, PrimeReactContext } from 'primereact/api';
import 'primereact/resources/themes/lara-light-cyan/theme.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <PrimeReactProvider>
      <Router>
        <App />
      </Router>
    </PrimeReactProvider>
  </React.StrictMode>,
);
