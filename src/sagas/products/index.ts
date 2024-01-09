import { ForkEffect, put, takeLatest } from "redux-saga/effects";
import { productFailure, productRequest, productResponse } from "../../reducers";
import { apiCall, defaultHeader } from "../../utils";


function* productsAll(request: any): Generator<any, void, any> {
  try {
    const url = "https://dummyjson.com/products";
    const headers = defaultHeader();
    const params = {
      limit: 10,
      skip: request.payload
    }
    const response = yield apiCall({ apiPath: url, headers, action: "GET", params });
    console.log("Saga -> response", response.data);
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