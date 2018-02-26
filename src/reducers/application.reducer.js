import * as types from '../actions/types';

export const initialState = {
  data: {},
  detailsValidated: false,
  error: null,
  loading: false
};

function reducer(prevState = initialState, action = {}) {
  if (!action) return prevState;

  if (action.type === types.FIND_APPLICATION_BY_SHORTCODE_REQUEST) {
    const newState = Object.assign({}, prevState);
    newState.loading = true;
    return newState;
  }

  if (action.type === types.FIND_APPLICATION_BY_SHORTCODE_SUCCESS) {
    const newState = Object.assign({}, prevState);
    newState.data = Object.assign({}, prevState.data, action.payload);
    newState.loading = false;
    return newState;
  }

  if (action.type === types.FIND_APPLICATION_BY_SHORTCODE_FAILED) {
    const newState = Object.assign({}, prevState);
    newState.error = action.payload.error;
    newState.data = Object.assign({}, prevState.data);;
    newState.loading = false;
    return newState;
  }

  if (action.type === types.VALIDATE_SIGN_IN_DETAILS_REQUEST) {
    const newState = Object.assign({}, prevState);
    newState.loading = true;
    return newState;
  }

  if (action.type === types.VALIDATE_SIGN_IN_DETAILS_SUCCESS) {
    const newState = Object.assign({}, prevState);
    newState.detailsValidated = action.payload.detailsValidated;
    newState.loading = false;
    return newState;
  }

  if (action.type === types.VALIDATE_SIGN_IN_DETAILS_FAILED) {
    const newState = Object.assign({}, prevState);
    newState.error = action.payload.error;
    newState.detailsValidated = prevState.data.detailsValidated;
    newState.loading = false;
    return newState;
  }


  return prevState
}

export default reducer;