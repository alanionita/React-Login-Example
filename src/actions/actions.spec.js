import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import moxios from 'moxios';

import * as actions from './actions';
import * as types from './types';

const middleware = [thunk];
const mockStore = configureMockStore(middleware);

describe('APPLICATION ACTIONS', () => {
  describe('#findApplicationByShortcodeRequest', () => {
    test('returns \'FIND APPLICATION BY SHORTCODE REQUEST\'', () => {
      expect(actions.findApplicationByShortcodeRequest()).toEqual({
        type: 'FIND APPLICATION BY SHORTCODE REQUEST'
      });
    });
  });
  describe('#findApplicationByShortcodeSuccess', () => {
    test('returns \'FIND APPLICATION BY SHORTCODE SUCCESS\' and payload', () => {
      const input = {
        foundApplication: true
      };
      expect(actions.findApplicationByShortcodeSuccess(input)).toEqual({
        type: 'FIND APPLICATION BY SHORTCODE SUCCESS',
        payload: input
      });
    });
  });
  describe('#fetchApplicationByShortcodeFailed ', () => {
    test('returns \'FIND APPLICATION BY SHORTCODE FAILED\' and payload', () => {
      const err = {
        error: "UUID not found"
      };
      expect(actions.findApplicationByShortcodeFailed(err)).toEqual({
        type: 'FIND APPLICATION BY SHORTCODE FAILED',
        payload: err
      });
    });
  });

  describe('#findApplicationByShortcode ASYNC', () => {
    beforeEach(function () {
      moxios.install();
    });

    afterEach(function () {
      moxios.uninstall();
    });

    test('returns correct series of actions and payload if succesful', () => {
      const shortcode = 'cats-like-mice';
      moxios.wait(() => {
        const request = moxios.requests.mostRecent();
        request.respondWith({
          status: 200,
          response: {
            foundApplication: true
          }
        });
      });

      const store = mockStore({
        application: null
      });

      const expectedActions = [
        { type: types.FIND_APPLICATION_BY_SHORTCODE_REQUEST },
        {
          type: types.FIND_APPLICATION_BY_SHORTCODE_SUCCESS,
          payload: {
            foundApplication: true
          }
        }
      ];
      return store.dispatch(actions.findApplicationByShortcode(shortcode)).then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
    });
  });
});

describe('SIGN IN ACTIONS', () => {
  describe('#validateSignInDetailsRequest', () => {
    test('returns \'VALIDATE SIGN IN DETAILS REQUEST\'', () => {
      expect(actions.validateSignInDetailsRequest()).toEqual({
        type: 'VALIDATE SIGN IN DETAILS REQUEST'
      });
    });
  });
  describe('#validateSignInDetailsSuccess', () => {
    test('returns \'VALIDATE SIGN IN DETAILS SUCCESS\' and payload', () => {
      const input = {
        detailsValidated: true
      };
      expect(actions.validateSignInDetailsSuccess(input)).toEqual({
        type: 'VALIDATE SIGN IN DETAILS SUCCESS',
        payload: input
      });
    });
  });
  describe('#validateSignInDetailsFailed ', () => {
    test('returns \'VALIDATE SIGN IN DETAILS FAILED\' and payload', () => {
      const err = {
        error: "Wrong document type and document number combination"
      };
      expect(actions.validateSignInDetailsFailed(err)).toEqual({
        type: 'VALIDATE SIGN IN DETAILS FAILED',
        payload: err
      });
    });
  });
  describe('#validateSignInDetails ASYNC', () => {
    beforeEach(function () {
      moxios.install();
    });

    afterEach(function () {
      moxios.uninstall();
    });

    test('returns correct series of actions and payload if succesful', () => {
      const shortcode = 'cats-like-mice';
      const userInput = {
        docType: "Passport",
        docNumber: "1099099887"
      }
      moxios.wait(() => {
        const request = moxios.requests.mostRecent();
        request.respondWith({
          status: 200,
          response: {
            detailsValidated: true
          }
        });
      });

      const store = mockStore({
        application: null
      });

      const expectedActions = [
        { type: types.VALIDATE_SIGN_IN_DETAILS_REQUEST },
        {
          type: types.VALIDATE_SIGN_IN_DETAILS_SUCCESS,
          payload: {
            detailsValidated: true
          }
        }
      ];
      return store.dispatch(actions.validateSignInDetails(shortcode, userInput)).then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
    });
  });
});