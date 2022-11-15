import React from 'react';
import { BrowserRouter } from 'react-router-dom'
import MainRoutes from './Rotas';
import ReactDOM from 'react-dom/client';
import './Style/index.css';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <MainRoutes />
    </BrowserRouter>
  </React.StrictMode>

);









