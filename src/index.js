import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import MainApplication from './components/MainApplication';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MainApplication />
  </React.StrictMode>
);