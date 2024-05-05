import { createSlice } from "@reduxjs/toolkit";
import John from "../assits/John.jpg";

const initialState = {
  questions: [
    {
      id: 1,
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
      id: 2,
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
      id: 3,
      type: "question",
      title: "What is the capital city of the country of Australia?",
      point: "25",
      duration: 30,
      options: [
        { name: "Canberra", ratio: "45" },
        { name: "Sydney", ratio: "83" },
        { name: "Melbourne", ratio: "65" },
        // { name: "Brisbane", ratio: "20" },
      ],
      corretAnswer: "Canberra",
      element: John,
    },
  ],
  loading: false,
  currentSelected: "",
  stateCreateQues: false,
  error: null, // Initialize error as null or an Error object
};

const questionSlice = createSlice({
  name: "question",
  initialState,
  reducers: {
    EditQuesion: (state, action) => {
      const updatedQuestions = state.questions.map((question) => {
        return question.id === action.payload.value.id
          ? action.payload.value
          : question;
      });
      return {
        ...state,
        questions: updatedQuestions,
      };
    },
    CreateQuestion: (state, action) => {
      state.questions = [...state.questions, action.payload];
    },
    DeleteQusetion: (state, action) => {
      state.questions = state.questions.filter((e) => e.id !== action.payload);

      state.currentSelected = "";
    },
    ManageShowSelectQuestion: (state, action) => {
      if (action.payload.value.id === state.currentSelected?.value?.id) {
        state.currentSelected = "";
      } else {
        state.currentSelected = action.payload;
        state.stateCreateQues = false;
      }
    },
    ShowBoxEditCreateQues: (state, action) => {
      state.currentSelected = "";
      state.stateCreateQues = action.payload;
    },
  },
  extraReducers: (builder) => {},
});

export default questionSlice.reducer;

export let {
  EditQuesion,
  CreateQuestion,
  DeleteQusetion,
  ManageShowSelectQuestion,
  ShowBoxEditCreateQues,
} = questionSlice.actions;
