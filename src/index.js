import React from 'react';
import ReactDOM from 'react-dom/client';
import './app.css';
import Aplicacion from './app';

const raiz = ReactDOM.createRoot(document.getElementById('root'));
raiz.render(
  <React.StrictMode>
    <Aplicacion />
  </React.StrictMode>
);