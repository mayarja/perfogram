import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  data: [
    {
      title: "test From Main",
      main: true,
      username: "mayar",
      time: "07:16 PM",
    },
    {
      title: "test From guest",
      main: false,
      username: "guest",
      time: "07:16 PM",
    },
    {
      title: "test From guest two",
      main: false,
      username: "guest",
      time: "07:16 PM",
    },
    {
      title: "test From Main two",
      main: true,
      username: "mayar",
      time: "07:16 PM",
    },
  ],
  loading: false,
  error: null, // Initialize error as null or an Error object
};

const chatSlice = createSlice({
  name: "chat",
  initialState,
  reducers: {
    addMessage(state, action) {
      state.data.push(action.payload);
    },
  },
  extraReducers: (builder) => {},
});

export default chatSlice.reducer;

export let { addMessage } = chatSlice.actions;
