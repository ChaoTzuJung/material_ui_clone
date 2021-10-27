import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootStateT } from '@chips/web/redux/store';

export interface CounterStateI {
  count: number;
}

const initialState: CounterStateI = {
  count: 0
};

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: state => {
      state.count += 1;
    },
    decrement: state => {
      state.count -= 1;
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.count += action.payload;
    }
  }
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export const selectCount = (state: RootStateT): number => state.counter.count;

export default counterSlice.reducer;
