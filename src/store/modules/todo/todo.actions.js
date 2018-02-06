export const TODOS_FETCH_REQUEST = "TODOS_FETCH_REQUEST";
export const TODOS_FETCH_SUCCESS = "TODOS_FETCH_SUCCESS";
export const TODOS_FETCH_FAILED = "TODOS_FETCH_FAILED";

import * as API from "../../../services/api";

export function fetchTodos(auth, successCallback, errorCallback) {
  return dispatch => {
    dispatch({ type: TODOS_FETCH_REQUEST });
    API.fetchTodos(auth, successCallback, errorCallback);
  };
}
