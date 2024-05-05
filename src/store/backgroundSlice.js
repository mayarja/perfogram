import { createSlice } from "@reduxjs/toolkit";
import img1 from "../assits/img-mobile.jpg";
import img2 from "../assits/img-mobile_2.jpg";

const initialState = {
  backgrounds: [
    {
      landscape: { name: "test landscape", src: img1, type: "img" },
      portrait: { name: "test portrait ", src: img2, type: "img" },
    },
  ],
  currentBackground: "",
  loading: false,
  error: null, // Initialize error as null or an Error object
};

const backgroundSlice = createSlice({
  name: "background",
  initialState,
  reducers: {
    addBackground(state, action) {
      state.backgrounds.push(action.payload);
    },
    getBackGruond: (state, action) => {
      state.currentBackground = action.payload;
    },
  },
  extraReducers: (builder) => {},
});

export default backgroundSlice.reducer;

export let { addBackground, getBackGruond } = backgroundSlice.actions;
