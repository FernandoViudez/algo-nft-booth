import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';



import { HashRouter as Router } from 'react-router-dom';
import {createBrowserHistory} from "history"
import { sessionSetActiveConf } from './lib/config';

const history = createBrowserHistory();

sessionSetActiveConf(parseInt(process.env.REACT_APP_NETWORK_TO_USE));

ReactDOM.render(
  <React.StrictMode>
    <Router >
      <App history={history}  />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);