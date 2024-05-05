import axios from "axios";
import { BASE_URL } from "../apiConfig";
import { createAsyncThunk } from "@reduxjs/toolkit";

const httpHeaders = {
  Accept: "application/json",
  "Content-Type": "application/json",
};

export const fetchBanners = createAsyncThunk(
  "banners/fetchBanners",
  async (_, ThunkAPI) => {
    let { rejectWithValue, getState } = ThunkAPI;
    const token = "token you have";
    try {
      const response = await axios.get(`${BASE_URL}/banners`, {
        headers: {
          ...httpHeaders,
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data.data; // Assuming the response format
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

export const updateBanners = createAsyncThunk(
  "banners/updateBanners",
  async (data, ThunkAPI) => {
    let { rejectWithValue, getState } = ThunkAPI;
    const token = "token you have";

    try {
      const response = await axios.post(`${BASE_URL}/banners`, data, {
        headers: {
          ...httpHeaders,
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data; // Assuming the response format
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);
