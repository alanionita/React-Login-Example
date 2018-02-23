import * as types from "./types"
import axios from "axios"

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
        return axios.get(`${process.env.REACT_APP_API_URL_APPLICATIONS}/applications/${shortcode}`)
            .then(res => {
                dispatch(findApplicationByShortcodeSuccess(res.data));
            })
            .catch(err => {
                dispatch(findApplicationByShortcodeFailed(err));
            });
    };
}

