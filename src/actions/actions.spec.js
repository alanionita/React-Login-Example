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