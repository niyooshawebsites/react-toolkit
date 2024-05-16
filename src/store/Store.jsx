import { configureStore } from "@reduxjs/toolkit";
import counterSliceReducer from "./slices/counterSlice";

const myStore = configureStore({
  reducer: {
    counter_slice: counterSliceReducer,
  },
});

export default myStore;
