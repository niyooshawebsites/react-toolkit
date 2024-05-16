import { configureStore, createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter_slice",
  initialState: { counter: 0 },
  reducers: {
    inc: (state) => {
      state.counter++;
    },
    dec: (state) => {
      state.counter--;
    },
    reset: (state) => {
      state.counter = 0;
    },
    add: (state, action) => {
      console.log(action);
      state.counter += +action.payload.num;
    },
    sub: (state, action) => {
      state.counter -= +action.payload.num;
    },
  },
});

const myStore = configureStore({
  reducer: {
    counter_slice: counterSlice.reducer,
  },
});

export const counterActions = counterSlice.actions;
export default myStore;
