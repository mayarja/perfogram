import { createSlice } from "@reduxjs/toolkit";
import imgCover1 from "../assits/img-mobile.jpg";
import imgCover2 from "../assits/img-mobile_2.jpg";

let themeslice = createSlice({
  name: "theme",
  initialState: {
    theme: "Bubble",
    color: "#0a4cc7",
    fontColor: "#ffffff",
    startStatus: true,
    sideBarStatus: false,
    settingBox: false,
    status: "", //Viewer,Host,Moderator
    cover: {},
    layout: "Fill", //Single,Fill,Grid,Main-sub
    ViewerTapMode: "basic", //basic,quiz
    ShowNameUser: false,
    showCover: false,
    stateSide: false,
    statusTapViewer: { status: true, value: "Private" },

    covers: {
      landscape: { name: "First landscape", src: imgCover1, type: "img" },
      portrait: { name: "First portrait ", src: imgCover2, type: "img" },
    },
    screenMode: "landscape", //Landscape,Portrait
  },
  reducers: {
    getTheme: (state, action) => {
      state.theme = action.payload;
    },

    getMainColor: (state, action) => {
      state.color = action.payload;
    },
    getFontColor: (state, action) => {
      state.fontColor = action.payload;
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
    getLayout: (state, action) => {
      state.layout = action.payload;
    },

    ChangeScrennMode: (state, action) => {
      state.screenMode = action.payload;
    },

    ManageViwerTapMode: (state, action) => {
      state.ViewerTapMode = action.payload;
    },
    ShowNameUserFn: (state, action) => {
      state.ShowNameUser = action.payload;
    },
    manageShowCover: (state, action) => {
      console.log("action.payload1231231", action.payload);
      state.showCover = action.payload;
    },
    togggleStatusChatViwer: (state, action) => {
      state.statusTapViewer = action.payload;
    },
    CloseSide: (state, action) => {
      console.log("asdsadasd");
      state.stateSide = { state: action.payload };
    },
  },
});

export default themeslice.reducer;
export let {
  CloseSide,
  togggleStatusChatViwer,
  manageShowCover,
  ManageDeleteGraphic,
  ManageDeleteItemToListAll,

  ManageReorderGraphic,
  ManageAddGraphic,
  ManageAddItemToListAll,
  ManageReOrderAllAction,
  ShowNameUserFn,
  getTheme,
  getMainColor,
  getFontColor,
  ChangeScrennMode,
  MangeStart,
  ManageSideBarSize,
  ManageSettingBox,
  ManageControlStatus,
  ManageCover,
  ManageViwerTapMode,
  getLayout,
} = themeslice.actions;
