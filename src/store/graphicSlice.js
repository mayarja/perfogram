import { createSlice } from "@reduxjs/toolkit";
import { randomPassword } from "../RandomID";
import img1 from "../assits/img-mobile.jpg";

const initialState = {
  graphics: [
    {
      title: "test",
      type: "graphic",
      src: img1,
      id: randomPassword(2),
    },
  ],
  loading: false,
  error: null, // Initialize error as null or an Error object
};

const graphicSlice = createSlice({
  name: "graphic",
  initialState,
  reducers: {
    ManageAddGraphic: (state, action) => {
      state.graphics = [...state.graphics, action.payload];
    },
    ManageDeleteGraphic: (state, action) => {
      state.graphics = state.graphics.filter((e) => e.id !== action.payload);
    },
    ManageReorderGraphic: (state, action) => {
      state.graphics = action.payload;
    },
  },
  extraReducers: (builder) => {
    // builder
    //   .addCase(fetchGraphic.pending, (state) => {
    //     state.loading = true;
    //     state.error = null;
    //   })
    //   .addCase(fetchGraphic.fulfilled, (state, action) => {
    //     state.loading = false;
    //     state.error = null;
    //     state.Graphic = action.payload;
    //   })
    //   .addCase(fetchGraphic.rejected, (state, action) => {
    //     state.loading = false;
    //     state.error = action.payloadl;
    //   });
    // //update Graphic
    // builder
    //   .addCase(updateGraphic.pending, (state) => {
    //     state.loading = true;
    //     state.error = null;
    //   })
    //   .addCase(updateGraphic.fulfilled, (state, action) => {
    //     state.loading = false;
    //     state.error = null;
    //     // Update data if needed based on response (optional)
    //   })
    //   .addCase(updateGraphic.rejected, (state, action) => {
    //     state.loading = false;
    //     state.error = action.payload;
    //   });
  },
});

export default graphicSlice.reducer;

export let { ManageAddGraphic, ManageDeleteGraphic, ManageReorderGraphic } =
  graphicSlice.actions;
