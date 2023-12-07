import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './proj_02_create_read/App_page';
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App></App>
  </BrowserRouter>
);