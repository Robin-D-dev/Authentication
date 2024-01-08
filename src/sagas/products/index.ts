import { ForkEffect, put, takeLatest } from "redux-saga/effects";
import { productFailure, productRequest, productResponse } from "../../reducers";
import { apiCall, defaultHeader } from "../../utils";


function* productsAll(): Generator<any, void, any> {
  try {
    const url = "https://dummyjson.com/products";
    const headers = defaultHeader();
    const response = yield apiCall({ apiPath: url, headers, action: "GET" });
    if (response.status === 200) {
     
      yield put(productResponse(response.data));
    }
  } catch (error) {
    yield put(productFailure(JSON.stringify(error)));
  }
}

export function* takeProductsRequest(): Generator<ForkEffect<never>, void, unknown> {
  yield takeLatest(productRequest.type, productsAll);
}