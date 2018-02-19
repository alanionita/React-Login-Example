import * as types from '../actions/types';

export const initialState = {
  applications: {},
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
    newState.applications = Object.assign({}, prevState.applications, action.payload);
    newState.loading = false;
    return newState;
  }

  if (action.type === types.FETCH_APPLICATION_BY_TOKEN_FAILED) {
    const newState = Object.assign({}, prevState);
    newState.error = action.payload;
    newState.applications = Object.assign({}, prevState.applications);
    newState.loading = false;
    return newState;
  }

  return prevState
}

export default reducer;