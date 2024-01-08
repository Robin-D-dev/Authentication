import { ForkEffect, put, takeLatest } from "redux-saga/effects";
import { loginFailure, loginRequest, loginResponse } from "../../reducers/auth";
import { apiCall, defaultHeader } from "../../utils";


function* login(request: any): Generator<any, void, any> {

  try {
    const headers = defaultHeader();
    const data = request.payload;
    const apiPath = "https://dummyjson.com/auth/login";
    const httpMethod = "POST";
    const response: any = yield apiCall({ headers, data, apiPath, action: httpMethod });

    if (response.status === 200) {
      yield put(loginResponse({
        token: response.data.token,
        email: response.data.email
      }));
    }
  } catch (error) {
    yield put(loginFailure(JSON.stringify(error)));
  }
}

export function* takeAuthRequest(): Generator<ForkEffect<never>, void, unknown> {
  yield takeLatest(loginRequest.type, login);
}