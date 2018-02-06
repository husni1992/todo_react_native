import * as actions from "./auth.actions";

export const initialState = {
  authToken: null,
  isLoggedin: false,
  authenticating: false,
  authenticated: false,
  error: null
};

/**
 * @export
 * @param {any} [state=initialState]
 * @param {any} action
 * @returns
 */
export default function reducer(state = initialState, action) {
  let { type, payload } = action;

  switch (action.type) {
    case actions.LOGIN_REQUEST:
      return {
        ...state,

        authenticating: true
      };

    case actions.LOGIN_SUCCESS:
      return {
        ...state,
        authToken: payload,
        authenticated: true,
        authenticating: false
      };

    case actions.LOGIN_FAILED:
      return {
        ...state,
        authenticated: false,
        authenticating: false,
        error: payload
      };

    default:
      return state;
  }
}
