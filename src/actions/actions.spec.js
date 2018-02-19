import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import moxios from 'moxios';

import * as actions from './actions';
import * as types from './types';

const middleware = [thunk];
const mockStore = configureMockStore(middleware);

describe('APPLICATION ACTIONS', () => {
    describe('fetchApplicationByTokenRequest', () => {
        test('returns \'FETCH APPLICATION BY TOKEN REQUEST\'', () => {
          expect(actions.fetchApplicationByTokenRequest()).toEqual({
            type: 'FETCH APPLICATION BY TOKEN REQUEST'
          });
        });
      });
      describe('fetchApplicationByTokenSuccess', () => {
        test('returns \'FETCH APPLICATION BY TOKEN SUCCESS\' and payload', () => {
          const input = {
            token: '34345454545232'
          };
          expect(actions.fetchApplicationByTokenSuccess(input)).toEqual({
            type: 'FETCH APPLICATION BY TOKEN SUCCESS',
            payload: input
          });
        });
      });
      describe('fetchApplicationByTokenFailed ', () => {
        test('returns \'FETCH APPLICATION BY TOKEN FAILED\' and payload', () => {
          const err = {
            err: 'I am an error!'
          };
          expect(actions.fetchApplicationByTokenFailed(err)).toEqual({
            type: 'FETCH APPLICATION BY TOKEN FAILED',
            payload: err
          });
        });
      });
});