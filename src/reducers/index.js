import {combineReducers} from 'redux';
import applicationReducer from './application.reducer.js';

export default combineReducers({
  application: applicationReducer,
});