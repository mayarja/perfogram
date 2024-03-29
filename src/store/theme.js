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
    sideBarStatus: false,
    settingBox: false,
    status: "", //Viewer,Host,Moderator
    cover: {},
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
    ManageSideBarSize: (state, action) => {
      state.sideBarStatus = action.payload;
    },
    ManageSettingBox: (state, action) => {
      state.settingBox = action.payload;
    },
    ManageControlStatus: (state, action) => {
      state.status = action.payload;
    },
    ManageCover: (state, action) => {
      state.cover = action.payload;
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
  ManageSideBarSize,
  ManageSettingBox,
  ManageControlStatus,
  ManageCover,
} = themeslice.actions;
