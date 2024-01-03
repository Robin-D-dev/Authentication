import { AllEffect, ForkEffect, all, fork } from "redux-saga/effects";
import { takeAuthRequest } from "../sagas";

function* rootSaga(): Generator<AllEffect<ForkEffect<void>>, void, unknown> {
  yield all([
    fork(takeAuthRequest),
  ])
}

export { rootSaga };