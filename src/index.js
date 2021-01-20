import React from 'react';
import ReactDOM from 'react-dom';
import './assets/output.css';
import App from './App';
import { transitions, positions, Provider as AlertProvider } from 'react-alert'
import AlertTemplate from 'react-alert-template-basic'
// import { BrowserRouter } from 'react-router-dom'


ReactDOM.render(
  <React.StrictMode>
    <AlertProvider template={AlertTemplate} >
   
    <App />
    
    </AlertProvider>
  </React.StrictMode>,
  document.getElementById('root')
);


