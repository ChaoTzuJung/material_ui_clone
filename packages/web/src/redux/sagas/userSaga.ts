import { call, put, takeEvery, ForkEffect } from 'redux-saga/effects';
import { AxiosResponse } from 'axios';

import api from '@chips/web/api';
import {
  login,
  setAuthSuccess,
  setAuthFailed,
  CurrentUserI
} from '@chips/web/redux/slice/userSlice';

function* fetchUser() {
  try {
    const user: AxiosResponse<CurrentUserI> = yield call(() =>
      api.method2('123')
    );
    yield put(setAuthSuccess(user.data));
    return user;
  } catch (error) {
    yield put(setAuthFailed(error));
  }
}

function* userSaga(): Generator<ForkEffect<never>, void, unknown> {
  yield takeEvery(login.type, fetchUser);
}

export default userSaga;
