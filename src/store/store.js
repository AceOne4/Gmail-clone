import { configureStore } from "@reduxjs/toolkit";
import ShowMessagReducer from "./Slice";

const store = configureStore({
  reducer: {
    showBox: ShowMessagReducer,
  },
});

export default store;
