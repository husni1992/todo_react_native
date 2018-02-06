export const LOGIN_REQUEST = "LOGIN_REQUEST";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILED = "LOGIN_FAILED";

import * as API from "../../../services/api";

export function login(formdata, successCallback, errorCallback) {
  return dispatch => {
    dispatch({ type: LOGIN_REQUEST });
    API.login(formdata, successCallback, errorCallback);
  };
}

export function loginSuccess(payload) {
  return { type: LOGIN_SUCCESS, payload };
}

export function loginFailed(error) {
  return { type: LOGIN_FAILED, payload: error };
}
