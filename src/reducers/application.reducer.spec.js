import reducer from './application.reducer';
import { initialState } from './application.reducer';
import * as actions from '../actions/actions';

describe('APPLICATION REDUCER', () => {
    test('is a function', () => {
        expect(typeof reducer).toBe('function');
    });
    describe('#findApplicationByShortcode', () => {
        test('add one application to the new state', () => {
            const action = actions.findApplicationByShortcodeSuccess({
                foundApplication: true
            });
            const newState = reducer(initialState, action);
            expect(typeof newState.data).toBe('object');
            expect(newState.data).toEqual({
                foundApplication: true
            });
        });
        test('changes the loading property in the new state', () => {
            const action = actions.findApplicationByShortcodeRequest();
            const newState = reducer(initialState, action);
            expect(newState.loading).toBe(true);
        });
        test('returns the error if it fails', () => {
            const action = actions.findApplicationByShortcodeFailed({
                error: 'UUID not found'
            });
            const newState = reducer(initialState, action);
            expect(newState.error).toEqual('UUID not found');
        });
    });
    describe('#validateSignInDetails', () => {
        test('add validation token to state', () => {
            const action = actions.validateSignInDetailsSuccess({
                detailsValidated: true
            });
            expect(initialState.detailsValidated).toEqual(false);
            const newState = reducer(initialState, action);
            expect(typeof newState.detailsValidated).toBe('boolean');
            expect(newState.detailsValidated).toEqual(true);
        });
        test('changes the loading property in the new state', () => {
            const action = actions.validateSignInDetailsRequest();
            const newState = reducer(initialState, action);
            expect(newState.loading).toBe(true);
        });
        test('returns the error if it fails', () => {
            // define test error
            let error = new Error();
            error.message = 'Wrong document type and document number combination';
            error.status = 404;
            // evaluate error
            const action = actions.validateSignInDetailsFailed(error);
            const newState = reducer(initialState, action);
            expect(newState.error).toEqual(error);
        });
    });    
});