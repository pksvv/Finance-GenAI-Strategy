import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import MainApplication from './components/MainApplication';

// Add error handling and debugging
console.log('Finance GenAI Portal loading...');

try {
  const rootElement = document.getElementById('root');
  if (!rootElement) {
    console.error('Root element not found!');
    throw new Error('Root element not found');
  }
  
  console.log('Creating React root...');
  const root = ReactDOM.createRoot(rootElement);
  
  console.log('Rendering MainApplication...');
  root.render(
    <React.StrictMode>
      <MainApplication />
    </React.StrictMode>
  );
  
  console.log('Finance GenAI Portal loaded successfully!');
} catch (error) {
  console.error('Error loading Finance GenAI Portal:', error);
  // Fallback content
  document.body.innerHTML = `
    <div style="padding: 20px; font-family: Arial, sans-serif;">
      <h1>Finance GenAI Strategy Portal</h1>
      <p>Loading error. Please check console for details.</p>
      <p>Error: ${error.message}</p>
    </div>
  `;
}