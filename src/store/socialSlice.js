import { createSlice } from "@reduxjs/toolkit";
import imgfacebook from "../assits/facebook.png";
import imginsta from "../assits//instagram.png";
const initialState = {
  listOfSocial: [
    { id: 1, title: "Aratok page", status: false, icon: imgfacebook },
    { id: 2, title: "Aratok Channel", status: true, icon: imginsta },
  ],
  loading: false,
  error: null, // Initialize error as null or an Error object
};

const socialSlice = createSlice({
  name: "social",
  initialState,
  reducers: {
    toggleSocialStatus(state, action) {
      const socialItem = state.listOfSocial.find(
        (item) => item.id === action.payload.id
      );
      if (socialItem) {
        socialItem.status = !socialItem.status;
      }
    },
  },
  extraReducers: (builder) => {},
});

export default socialSlice.reducer;

export let { toggleSocialStatus } = socialSlice.actions;
