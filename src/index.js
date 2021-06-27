import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import SignIn from './SignIn';
import Arr from './Arr';


ReactDOM.render(
  <React.StrictMode>
    <App />
    <SignIn />
    <Arr />
  </React.StrictMode>,
  document.getElementById('root')
);

