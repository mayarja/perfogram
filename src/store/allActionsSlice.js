import { createSlice } from "@reduxjs/toolkit";
import John from "../assits/John.jpg";

const initialState = {
  AllActions: [
    {
      id: "pij20",
      order: 1,
      title: "What is the capital city of the country of Australia?",
      point: "25",
      duration: 30,
      type: "question",
      options: [
        { name: "Canberra", ratio: "40" },
        { name: "Sydney", ratio: "30" },
        { name: "Melbourne", ratio: "90" },
        { name: "Brisbane", ratio: "60" },
      ],
      corretAnswer: "Canberra",
      element: "",
    },
    {
      id: "adsas12",
      order: 2,
      type: "question",
      title:
        "ما اسم المطرب الظاهر في الصورة على الشاشة الجميلة والسؤال طويل جدا جدا جدا جدا يمتد على ثلاثة أسطر طويلة جدا؟",
      point: "25",
      duration: 30,
      options: [
        { name: "Canberra", ratio: "70" },
        { name: "Sydney", ratio: "10" },
        { name: "Melbourne", ratio: "50" },
        { name: "Brisbane", ratio: "80" },
      ],
      corretAnswer: "Canberra",
      element: John,
    },
    {
      id: "asdlk",
      order: 3,
      title: "Who will win the syria presidential elections in 2024?",
      type: "poll",
      options: [
        { name: "Canberra", ratio: "80" },
        { name: "Sydney", ratio: "30" },
        { name: "Melbourne", ratio: "70" },
        { name: "Brisbane", ratio: "60" },
      ],
      corretAnswer: "Canberra",
      element: John,
    },
    {
      id: 568152,
      order: 4,
      type: "banner",
      title:
        "Welcome to the grand spectacle, where lights dazzle, music enthralls, and excitement fills the air. This is the fantastic show of the century, where all the superstars ",
      ticker: false,
    },
    {
      id: 101,
      order: 5,
      type: "graphic",
      title: "Picture about the singer Nable",
      src: John,
    },
    {
      id: 100,
      order: 6,
      title: "Video about the singer Nable",
      type: "video",
      duration: "0:30",
      src: "https://storage.googleapis.com/streamyard-app/examples/video-clips/countdown3_1280x720_q_med.mp4",
    },
  ],
};

const allActionsSlice = createSlice({
  name: "allActions",
  initialState,
  reducers: {
    addAllAction: (state, action) => {
      state.AllActions.push(action.payload);
    },
    deleteAllAction: (state, action) => {
      console.log("aasdasdas");
      state.AllActions = state.AllActions.filter(
        (item) => item.id !== action.payload
      );
    },
    editAllAction: (state, action) => {
      const { id, values } = action.payload;
      const index = state.AllActions.findIndex((action) => action.id === id);

      if (index !== -1) {
        state.AllActions[index] = { ...state.AllActions[index], ...values };
      } else {
        console.error(`AllAction with id ${id} not found`);
      }
    },
    ManageReOrderAllAction: (state, action) => {
      state.AllActions = action.payload;
    },
  },
});

export default allActionsSlice.reducer;
export const { addAllAction, deleteAllAction, editAllAction } =
  allActionsSlice.actions;
