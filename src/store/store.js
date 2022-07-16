import { configureStore } from "@reduxjs/toolkit";
import MessageReducer from "./MessageSlice";
import ShowMessagReducer from "./Slice";

const store = configureStore({
  reducer: {
    showBox: ShowMessagReducer,
    Messages: MessageReducer,
  },
});

export default store;
