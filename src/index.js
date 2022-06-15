import React from 'react';
import ReactDOM from 'react-dom/client';
import './ui/main.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ReducerDataProvider } from './api/ReducerContext';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ReducerDataProvider>
      <App />
  </ReducerDataProvider>
);
reportWebVitals();
