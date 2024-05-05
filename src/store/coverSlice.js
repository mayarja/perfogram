import { createSlice } from "@reduxjs/toolkit";
import img1 from "../assits/img-mobile.jpg";
import img2 from "../assits/img-mobile_2.jpg";
const initialState = {
  covers: [
    {
      landscape: { name: "First landscape", src: img1, type: "img" },
      portrait: { name: "First portrait ", src: img2, type: "img" },
    },
  ],
  loading: false,
  error: null, // Initialize error as null or an Error object
};

const coversSlice = createSlice({
  name: "cover",
  initialState,
  reducers: {
    addCover(state, action) {
      state.covers.push(action.payload);
    },
  },
  extraReducers: (builder) => {},
});

export default coversSlice.reducer;

export let { addCover } = coversSlice.actions;
