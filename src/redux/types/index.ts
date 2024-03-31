import { CounterState } from '../reducers/counterSlice'; // Import the type from your counter slice


export interface RootState {
    counter: CounterState;
    // Add more slice states here if needed
  }