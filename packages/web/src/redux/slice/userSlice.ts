import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface AuthErrorI {
  message: string;
}

export interface AuthStateI {
  isAuth: boolean;
  currentUser?: CurrentUserI;
  isLoading: boolean;
  error: AuthErrorI;
}

export interface CurrentUserI {
  firstName: string;
  id: number;
  lastName: string;
}

export const initialState: AuthStateI = {
  isAuth: false,
  isLoading: false,
  error: { message: 'An Error occurred' }
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: state => {
      state;
    },
    setAuthSuccess: (state, action: PayloadAction<CurrentUserI>) => {
      state.isAuth = true;
      state.currentUser = action.payload;
    },
    setLogOut: state => {
      state.isAuth = false;
      state.currentUser = undefined;
    },
    setAuthFailed: (state, action: PayloadAction<AuthErrorI>) => {
      state.isAuth = false;
      state.error = action.payload;
    }
  }
});

export const { login, setAuthSuccess, setLogOut, setAuthFailed } =
  userSlice.actions;

export default userSlice.reducer;
