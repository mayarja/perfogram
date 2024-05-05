import { createSlice } from "@reduxjs/toolkit";
import { randomPassword } from "../RandomID";

const initialState = {
  videos: [
    {
      id: randomPassword(2),
      title: "test",
      type: "video",
      duration: "0:30",
      src: "https://storage.googleapis.com/streamyard-app/examples/video-clips/countdown3_1280x720_q_med.mp4",
    },
  ],
  loading: false,
  error: null, // Initialize error as null or an Error object
};

const videosSlice = createSlice({
  name: "videos",
  initialState,
  reducers: {
    ManageAddVideo: (state, action) => {
      state.videos = [...state.videos, action.payload];
    },
    ManageDeleteVideo: (state, action) => {
      state.videos = state.videos.filter((e) => e.id !== action.payload);
    },
    ManageReorderVideo: (state, action) => {
      state.videos = action.payload;
    },
  },
  extraReducers: (builder) => {
    // builder
    //   .addCase(fetchVideos.pending, (state) => {
    //     state.loading = true;
    //     state.error = null;
    //   })
    //   .addCase(fetchVideos.fulfilled, (state, action) => {
    //     state.loading = false;
    //     state.error = null;
    //     state.Videos = action.payload;
    //   })
    //   .addCase(fetchVideos.rejected, (state, action) => {
    //     state.loading = false;
    //     state.error = action.payloadl;
    //   });
    // //update Videos
    // builder
    //   .addCase(updateVideos.pending, (state) => {
    //     state.loading = true;
    //     state.error = null;
    //   })
    //   .addCase(updateVideos.fulfilled, (state, action) => {
    //     state.loading = false;
    //     state.error = null;
    //     // Update data if needed based on response (optional)
    //   })
    //   .addCase(updateVideos.rejected, (state, action) => {
    //     state.loading = false;
    //     state.error = action.payload;
    //   });
  },
});

export default videosSlice.reducer;

export let { ManageAddVideo, ManageDeleteVideo, ManageReorderVideo } =
  videosSlice.actions;
