import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import EmployeeProvider from './context/EmployeeProvider';
import App from './App';
import './app.scss'


ReactDOM.render(
  <EmployeeProvider>
  <BrowserRouter>
    <App />
  </BrowserRouter>
  </EmployeeProvider>, document.getElementById('root'));