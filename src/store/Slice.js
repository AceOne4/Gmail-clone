import { createSlice } from "@reduxjs/toolkit";

const ShowMessageBox = createSlice({
  //1-give a identifire name
  name: "showBox",
  //2-intialState
  initialState: { ShowMessageBox: false },
  //3-reducer
  reducers: {
    open: (state) => {
      state.ShowMessageBox = true;
    },
    close: (state) => {
      state.ShowMessageBox = false;
    },
  },
});

export const ShowMessageBoxAction = ShowMessageBox.actions;

export default ShowMessageBox.reducer;
