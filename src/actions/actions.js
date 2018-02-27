import * as types from "./types"
import axios from "axios"
import { SubmissionError } from 'redux-form';

export function findApplicationByShortcodeRequest () {
    return {
        type: types.FIND_APPLICATION_BY_SHORTCODE_REQUEST
    };
}

export function findApplicationByShortcodeSuccess (foundApplication) {
    return {
        type: types.FIND_APPLICATION_BY_SHORTCODE_SUCCESS,
        payload: foundApplication
    };
}

export function findApplicationByShortcodeFailed (err) {
    return {
        type: types.FIND_APPLICATION_BY_SHORTCODE_FAILED,
        payload: err
    };
}

export function findApplicationByShortcode (shortcode) {
    return function (dispatch) {
        dispatch(findApplicationByShortcodeRequest());
        return axios.get(`${process.env.REACT_APP_API_URL_APPLICATIONS}/applications/${shortcode}/validate`)
            .then(res => {
                dispatch(findApplicationByShortcodeSuccess(res.data));
            })
            .catch(err => {
                dispatch(findApplicationByShortcodeFailed(err));
            });
    };
}

export function validateSignInDetailsRequest () {
    return {
        type: types.VALIDATE_SIGN_IN_DETAILS_REQUEST
    };
}

export function validateSignInDetailsSuccess (validation) {
    return {
        type: types.VALIDATE_SIGN_IN_DETAILS_SUCCESS,
        payload: validation
    };
}

export function validateSignInDetailsFailed (err) {
    return {
        type: types.VALIDATE_SIGN_IN_DETAILS_FAILED,
        payload: err
    };
}

export function validateSignInDetails (shortcode, userInput) {
    return function (dispatch) {
        dispatch(validateSignInDetailsRequest());
        return axios.post(`${process.env.REACT_APP_API_URL_APPLICATIONS}/documents/${shortcode}/validate`, userInput)
            .then(res => {
                dispatch(validateSignInDetailsSuccess(res.data));
            })
            .catch(err => {
                const validationError = new SubmissionError(err)
                dispatch(validateSignInDetailsFailed(validationError));
            });
    };
}
