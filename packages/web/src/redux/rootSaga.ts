import { all, AllEffect, ForkEffect } from 'redux-saga/effects';

import UserSaga from '@chips/web/redux/sagas/userSaga';

export default function* rootSaga(): Generator<
  AllEffect<Generator<ForkEffect<never>, void, unknown>>,
  void,
  unknown
  > {
  yield all([UserSaga()]);
}
