import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { App } from './App.jsx';
// import { Practices } from "./Practices.jsx";

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    {/* <Practices /> */}
  </React.StrictMode>
);
