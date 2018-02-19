import * as types from "./types"
import axios from "axios"

export function fetchApplicationByTokenRequest () {
    return {
        type: types.FETCH_APPLICATION_BY_TOKEN_REQUEST
    };
}

export function fetchApplicationByTokenSuccess (application) {
    return {
        type: types.FETCH_APPLICATION_BY_TOKEN_SUCCESS,
        payload: application
    };
}

export function fetchApplicationByTokenFailed (err) {
    return {
        type: types.FETCH_APPLICATION_BY_TOKEN_FAILED,
        payload: err
    };
}