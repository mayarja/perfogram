import { createSlice } from "@reduxjs/toolkit";
import John from "../assits/John.jpg";

const initialState = {
  polls: [
    {
      id: 1,
      title: "Who will win the USA presidential elections in 2024?",
      type: "poll",
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
      id: 2,
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
  ],
  loading: false,
  currentSelectedPoll: "",
  stateCreatePoll: false,
  error: null, // Initialize error as null or an Error object
};

const pollsSlice = createSlice({
  name: "poll",
  initialState,
  reducers: {
    EditPoll: (state, action) => {
      const updatedPolls = state.polls.map((poll) => {
        return poll.id === action.payload.value.id
          ? action.payload.value
          : poll;
      });

      return { ...state, polls: updatedPolls };
    },
    CreatePoll: (state, action) => {
      state.polls = [...state.polls, action.payload];
    },
    DeletePoll: (state, action) => {
      state.currentSelectedPoll = "";
      state.polls = state.polls.filter((e) => e.id !== action.payload);
    },
    ManageShowSelectPoll: (state, action) => {
      if (action.payload.value.id === state.currentSelectedPoll?.value?.id) {
        state.currentSelectedPoll = "";
      } else {
        state.currentSelectedPoll = action.payload;
        state.stateCreatePoll = false;
      }
    },
    ShowBoxEditCreatePoll: (state, action) => {
      state.currentSelectedPoll = "";
      state.stateCreatePoll = action.payload;
    },
  },
  extraReducers: (builder) => {},
});

export default pollsSlice.reducer;

export let {
  EditPoll,
  CreatePoll,
  DeletePoll,
  ManageShowSelectPoll,
  ShowBoxEditCreatePoll,
} = pollsSlice.actions;
