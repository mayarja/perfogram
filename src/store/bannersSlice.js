import { createSlice } from "@reduxjs/toolkit";
import { fetchBanners, updateBanners } from "../services/bannerService";
import { randomPassword } from "../RandomID";

const initialState = {
  banners: [
    {
      id: randomPassword(2),
      title: "First Banner",
      ticker: false,
      type: "banner",
      url: "",
      interactive: "",
      leftToRight: "",
      shoppable: "",
    },
  ],
  loading: false,
  error: null, // Initialize error as null or an Error object
  title: "",
  ticker: "",
};

const bannersSlice = createSlice({
  name: "banners",
  initialState,
  reducers: {
    getTitleBanner: (state, action) => {
      console.log("getTitleBanner action.payload", action.payload);
      state.title = action.payload;
    },
    getTicker: (state, action) => {
      console.log(" getTicker action.payload", action.payload);
      state.ticker = action.payload;
    },

    ManageAddBanner: (state, action) => {
      state.banners = [...state.banners, action.payload];
    },

    ManageDeleteBanner: (state, action) => {
      state.banners = state.banners.filter((e) => e.id !== action.payload);
    },

    ManageReorderBanner: (state, action) => {
      state.banners = action.payload;
    },

    ManageEditBanner: (state, action) => {
      const { id, values } = action.payload; // Destructure id and values from payload
      const index = state.banners.findIndex((banner) => banner.id === id);

      if (index !== -1) {
        state.banners[index] = {
          ...state.banners[index],
          ...values,
        };
      } else {
        console.error(`Banner with id ${id} not found`);
      }
    },
  },
  extraReducers: (builder) => {
    //create Banners
    builder
      .addCase(fetchBanners.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchBanners.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.banners = action.payload;
      })
      .addCase(fetchBanners.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payloadl;
      });

    //update Banners
    builder
      .addCase(updateBanners.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateBanners.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        // Update data if needed based on response (optional)
      })
      .addCase(updateBanners.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default bannersSlice.reducer;

export let {
  getTitleBanner,
  getTicker,
  ManageAddBanner,
  ManageDeleteBanner,
  ManageReorderBanner,
  ManageEditBanner,
} = bannersSlice.actions;
