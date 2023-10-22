/**
    * @description      : 
    * @author           : DHANUSH
    * @group            : 
    * @created          : 22/10/2023 - 12:32:56
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 22/10/2023
    * - Author          : DHANUSH
    * - Modification    : 
**/
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <App />
</BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
