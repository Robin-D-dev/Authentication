import axios from "axios";
import { ForkEffect, put, takeLatest } from "redux-saga/effects";
import { loginFailure, loginResponse } from "../reducers/auth";


function* login(request: any): Generator<any, void, any> {

  try {

    const data = request.payload;
    const requestParams = {
      method: "POST",
      url: "https://dummyjson.com/auth/login",
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    }
    const response = axios(requestParams).then(res => res);
    console.log(response);
    // put(loginResponse(response));
  } catch (error) {
    console.log('Error', error);
  }
}

export function* takeAuthRequest(): Generator<ForkEffect<never>, void, unknown> {
  yield takeLatest(loginFailure, login);
}