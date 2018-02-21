import reducer from './application.reducer';
import { initialState } from './application.reducer';
import * as actions from '../actions/actions';

describe('APPLICATION REDUCER', () => {
    test('is a function', () => {
        expect(typeof reducer).toBe('function');
    });
    describe('#fetchApplicationByToken', () => {
        test('add one application to the new state', () => {
            const action = actions.fetchApplicationByTokenSuccess({
                "78728378787283787": {
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
            });
            const newState = reducer(initialState, action);
            expect(typeof newState.data).toBe('object');
            expect(newState.data).toEqual({
                "78728378787283787": {
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
            });
        });
        test('changes the loading property in the new state', () => {
            const action = actions.fetchApplicationByTokenRequest();
            const newState = reducer(initialState, action);
            expect(newState.loading).toBe(true);
        });
        test('returns the error if it fails', () => {
            const action = actions.fetchApplicationByTokenFailed('error');
            const newState = reducer(initialState, action);
            expect(newState.error).toEqual('error');
        });
    });
});