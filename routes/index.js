import { Router, Route, browserHistory } from 'react-router';
import React, { PropTypes } from 'react';
import { Provider } from 'react-redux';

var handleRender = require('./server.js')
const Root = () => (
  <Router>
    <Route path="/" component={App} />
  </Router>  
);