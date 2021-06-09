import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Main from './main';

ReactDOM.render(
  <Router>
    <React.StrictMode>
      <Main />
    </React.StrictMode>
  </Router>,
  document.getElementById('root')
);
