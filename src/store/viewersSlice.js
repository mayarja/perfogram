import { createSlice } from "@reduxjs/toolkit";
import germany from "../assits/germany.png";
import canada from "../assits/canada.png";
import france from "../assits/france.png";
import india from "../assits/india.png";
const initialState = {
  viewers: [
    {
      numberFlag: "1",
      flag: germany,
      name: "Zaher Hinbarji",
      numberIcon: "12",
      Coins: "10000",
      hertNumber: "3",
    },
    {
      numberFlag: "2",
      flag: canada,
      name: "رامي الطويل اسم طويل جدا جدا جدا جدا جدا",
      numberIcon: "12",
      Coins: "89,485",
      hertNumber: "2",
    },
    {
      numberFlag: "3",
      flag: france,
      name: "George Brown",
      numberIcon: "12",
      Coins: "314",
      hertNumber: "1",
    },
    {
      numberFlag: "50",
      flag: india,
      name: "Ava Evans",
      numberIcon: "19",
      Coins: "2700",
      hertNumber: "2",
    },
    {
      numberFlag: "100",
      flag: france,
      name: "Sophia Clark",
      numberIcon: "12",
      Coins: "1900",
      hertNumber: "4",
    },
    {
      numberFlag: "999",
      flag: canada,
      name: "Lily Wright",
      numberIcon: "12",
      Coins: "1900",
      hertNumber: "0",
    },
    {
      numberFlag: "10000",
      flag: france,
      name: "Evans George",
      numberIcon: "12",
      Coins: "200",
      hertNumber: "0",
    },
  ],
  loading: false,
  error: null, // Initialize error as null or an Error object
};

const viewersSlice = createSlice({
  name: "viewer",
  initialState,
  reducers: {},
  extraReducers: (builder) => {},
});

export default viewersSlice.reducer;

// export let {} = viewersSlice.actions;
