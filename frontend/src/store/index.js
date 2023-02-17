import { configureStore } from "@reduxjs/toolkit";
import eventReducer from "./eventReducer";

const store = configureStore({
  reducer: {
    dummyData: eventReducer,
  },
});

export default store;
