import { createSlice } from "@reduxjs/toolkit";

let themeslice = createSlice({
  name: "theme",
  initialState: {
    theme: "Bubble",
    title: "",
    ticker: "",
    color: "#0a4cc7",
    mic: true,
    cam: true,
    stopMicCam: false,
    startStatus: true,
  },
  reducers: {
    getTheme: (state, action) => {
      state.theme = action.payload;
    },
    getTitle: (state, action) => {
      state.title = action.payload;
    },
    getTicker: (state, action) => {
      state.ticker = action.payload;
    },
    getColor: (state, action) => {
      state.color = action.payload;
    },
    MicStatus: (state, action) => {
      state.mic = action.payload;
    },
    CamStatus: (state, action) => {
      state.cam = action.payload;
    },
    StopCameraMic: (state, action) => {
      state.stopMicCam = action.payload;
    },
    MangeStart: (state, action) => {
      state.startStatus = action.payload;
    },
  },
});

export default themeslice.reducer;
export let {
  getTitle,
  getTicker,
  getTheme,
  getColor,
  MicStatus,
  CamStatus,
  StopCameraMic,
  MangeStart,
} = themeslice.actions;
