import { LOGIN_URL, TODOS_URL } from "../config/constants";

export function login(formdata, successCallback, errorCallback) {
  const returnsJSON = false;
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(formdata)
  };
  fetch(LOGIN_URL, options)
    .then(response => {
      if (!response.ok) {
        throw Error("Error occurred");
      }
      return response;
    })
    .then(response => {
      return response
        .text()
        .then(payload =>
          successCallback({
            httpStatus: response.status,
            payload,
            authToken: response.headers.get("x-auth")
          })
        )
        .catch(error =>
          errorCallback({
            httpStatus: response.status,
            error: error.message
          })
        );
    })
    .catch(error => {
      errorCallback({
        errorCode: 500,
        error
      });
    });
}

export function fetchTodos(auth, successCallback, errorCallback) {
  fetch(TODOS_URL, {
    method: "GET",
    headers: new Headers({
      "x-auth": auth.authToken
    })
  })
    .then(response => {
      if (!response.ok) {
        throw Error("Error occurred");
      }
      return response;
    })
    .then(response => {
      return response
        .text()
        .then(payload =>
          successCallback({
            httpStatus: response.status,
            payload
          })
        )
        .catch(error =>
          errorCallback({
            httpStatus: response.status,
            error
          })
        );
    })
    .catch(error => {
      errorCallback({
        errorCode: 500,
        error
      });
    });
}
