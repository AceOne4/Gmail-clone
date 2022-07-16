import { createSlice } from "@reduxjs/toolkit";

const messages = createSlice({
  name: "Messages",
  initialState: {
    EMessages: [],
    amountOfmessages: 0,
    change: false,
    loading: false,
  },
  reducers: {
    replaceMessages: (state, action) => {
      state.amountOfmessages = action.payload.amountOfmessages;
      state.EMessages = action.payload.EMessages;
    },
    AddMessages: (state, action) => {
      const newMessage = action.payload;
      state.amountOfmessages++;
      state.change = true;
      state.EMessages.push({
        id: newMessage.id,
        title: newMessage.title,
        message: newMessage.message,
        description: newMessage.description,
        time: newMessage.time,
      });
    },
    deleteMessage: (state, action) => {
      const id = action.payload;
      state.amountOfmessages--;
      state.change = true;
      state.EMessages = state.EMessages.filter((m) => m.id !== id);
    },
    ShowLoading: (state) => {
      state.loading = !state.loading;
    },
  },
});

export const Messagesction = messages.actions;

export default messages.reducer;
