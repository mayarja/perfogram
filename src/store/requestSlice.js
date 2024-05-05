import { createSlice } from "@reduxjs/toolkit";
import germany from "../assits/germany.png";
import canada from "../assits/canada.png";
import france from "../assits/france.png";
import india from "../assits/india.png";
const initialState = {
  requests: [
    {
      numberFlag: "2",
      flag: germany,
      name: "Zaher Hinbarji",
      mic: true,
      cam: false,
    },
    {
      numberFlag: "100",
      flag: canada,
      name: "رامي الطويل اسم طويل جدا جدا جدا جدا جدا",
      mic: false,
      cam: true,
    },
    {
      numberFlag: "2",
      flag: france,
      name: "George Brown",
      mic: true,
      cam: false,
    },
    {
      numberFlag: "100",
      flag: india,
      name: "Ava Evans",
      mic: true,
      cam: false,
    },
    {
      numberFlag: "100",
      flag: france,
      name: "Sophia Clark",
      numberIcon: "12",
      mic: false,
      cam: true,
    },
    {
      numberFlag: "65",
      flag: canada,
      name: "Lily Wright",
      mic: false,
      cam: true,
    },
  ],
  loading: false,
  error: null, // Initialize error as null or an Error object
};

const requestsSlice = createSlice({
  name: "request",
  initialState,
  reducers: {},
  extraReducers: (builder) => {},
});

export default requestsSlice.reducer;

// export let {} = requestsSlice.actions;
