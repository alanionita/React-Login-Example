import * as types from '../actions/types';
import { insertItem, removeItem } from '../helpers'

export const initialState = {
  data: {},
  error: null,
  loading: false
};

function reducer(prevState = initialState, action = {}) {
  if (!action) return prevState;

  if (action.type === types.FETCH_APPLICATION_BY_TOKEN_REQUEST) {
    const newState = Object.assign({}, prevState);
    newState.loading = true;
    return newState;
  }

  if (action.type === types.FETCH_APPLICATION_BY_TOKEN_SUCCESS) {
    const newState = Object.assign({}, prevState);
    newState.data = Object.assign({}, prevState.data, action.payload);
    newState.loading = false;
    return newState;
  }

  if (action.type === types.FETCH_APPLICATION_BY_TOKEN_FAILED) {
    const newState = Object.assign({}, prevState);
    newState.error = action.payload;
    newState.data = Object.assign({}, prevState.data);;
    newState.loading = false;
    return newState;
  }

  return prevState
}

export default reducer;