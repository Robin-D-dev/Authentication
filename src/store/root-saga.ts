import { AllEffect, ForkEffect, all, fork } from "redux-saga/effects";
import { takeAuthRequest } from "../sagas/auth";
import { takeProductsRequest } from "../sagas/products";

function* rootSaga(): Generator<AllEffect<ForkEffect<void>>, void, unknown> {
  yield all([
    fork(takeAuthRequest),
    fork(takeProductsRequest)])
}

export { rootSaga };