// reducers/counterSlice.ts
import { createSlice } from '@reduxjs/toolkit';

// Define the type for the initial state
export interface CounterState {
  value: number;
}

const initialState: CounterState = {
  value: 0
};

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    incremented: (state) => {
      state.value += 1;
    },
    decremented: (state) => {
      state.value -= 1;
    }
  }
});

export const { incremented, decremented } = counterSlice.actions;
export default counterSlice.reducer;
