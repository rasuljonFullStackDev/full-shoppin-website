import React from 'react';
import ReactDOM from 'react-dom/client';
import './ui/main.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ReducerDataProvider } from './api/ReducerContext';
import { BrowserRouter } from 'react-router-dom';
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <ReducerDataProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ReducerDataProvider>
);
reportWebVitals();
