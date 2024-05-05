import { createSlice } from "@reduxjs/toolkit";
import img1 from "../assits/Perfogram_Logo_TransparentBG.png";
const initialState = {
  logos: [
    {
      name: "test",
      src: img1,
    },
  ],
  loading: false,
  error: null, // Initialize error as null or an Error object
};

const logoSlice = createSlice({
  name: "logo",
  initialState,
  reducers: {
    addLogo(state, action) {
      state.logos.push(action.payload);
    },
  },
  extraReducers: (builder) => {},
});

export default logoSlice.reducer;

export let { addLogo } = logoSlice.actions;
