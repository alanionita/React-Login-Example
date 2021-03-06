import React from 'react';
import { render } from 'react-dom';

// REDUX
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import combinedReducer from './reducers/index';

// STYLING
import './index.css';

// components
import Root from './Root';

const store = createStore(combinedReducer, applyMiddleware(thunk, logger));

render(<Root store={store}/>, document.getElementById('root'));
