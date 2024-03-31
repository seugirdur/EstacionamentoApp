import { combineReducers } from '@reduxjs/toolkit';
import counterReducer from './counterSlice'; // Import your counter reducer here

export const rootReducer = combineReducers({
  counter: counterReducer,
  // Add more reducers here if needed
});