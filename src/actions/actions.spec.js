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

  describe('fetchApplicationByToken ASYNC', () => {
    beforeEach(function () {
      moxios.install();
    });

    afterEach(function () {
      moxios.uninstall();
    });

    test('returns correct series of actions and payload if succesful', () => {
      const token = '478738478783845873';
      moxios.wait(() => {
        const request = moxios.requests.mostRecent();
        request.respondWith({
          status: 200,
          response: {
            application: {
              "scannedDocuments": {
                "3467891234": {
                  "docType": "National Id",
                  "docNumber": "190088778784"
                },
                "8989898988": {
                  "docType": "Proof of Address",
                  "documentIssuer": "Santander Bank"
                }
              },
              "certificates": {
                "000999847747": "this is certificate number 1 for David"
              }
            }
          }
        });
      });

      const store = mockStore({
        application: null
      });

      const expectedActions = [
        { type: types.FETCH_APPLICATION_BY_TOKEN_REQUEST },
        {
          type: types.FETCH_APPLICATION_BY_TOKEN_SUCCESS,
          payload: {
            application: {
              "scannedDocuments": {
                "3467891234": {
                  "docType": "National Id",
                  "docNumber": "190088778784"
                },
                "8989898988": {
                  "docType": "Proof of Address",
                  "documentIssuer": "Santander Bank"
                }
              },
              "certificates": {
                "000999847747": "this is certificate number 1 for David"
              }
            }
          }
        }
      ];
      return store.dispatch(actions.fetchApplicationByToken(token)).then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
    });
  });
});