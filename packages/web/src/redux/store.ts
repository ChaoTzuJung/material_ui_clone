import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
// import logger from 'redux-logger';

import rootReducer from '@chips/web/redux/rootReducer';
import rootSaga from '@chips/web/redux/rootSaga';

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: rootReducer,
  middleware: [...getDefaultMiddleware({ thunk: false }), sagaMiddleware]
});

sagaMiddleware.run(rootSaga);

export default store;

export type RootStateT = ReturnType<typeof rootReducer>;

export type AppDispatchT = typeof store.dispatch;
