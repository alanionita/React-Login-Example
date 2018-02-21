import {combineReducers} from 'redux';
import applicationReducer from './application.reducer.js';
import { reducer as formReducer } from 'redux-form';

export default combineReducers({
  application: applicationReducer,
  form: formReducer
});