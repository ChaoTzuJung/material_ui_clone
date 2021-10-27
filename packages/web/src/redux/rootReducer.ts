import { combineReducers } from '@reduxjs/toolkit';

import counterReducer from '@chips/web/redux/slice/counterSlice';
import userReducer from '@chips/web/redux/slice/userSlice';

const rootReducer = combineReducers({
  counter: counterReducer,
  user: userReducer
});

export default rootReducer;
