import App from './components/App';

import React from 'react';
import PropTypes from 'prop-types';
import { Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import createBrowserHistory from 'history/createBrowserHistory';
const history = createBrowserHistory();

const Root = ({ store }) => (
  <Provider store={store}>
    <Router history={history}>
      <Switch>
        <Route path="/" component={App} />
      </Switch>
    </Router>
  </Provider>
);

Root.propTypes = {
  store: PropTypes.object.isRequired
};

export default Root;
