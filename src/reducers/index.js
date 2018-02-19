import {combineReducers} from 'redux';
import applicationsReducer from './applications.reducer.js';

export default combineReducers({
  applications: applicationsReducer,
});