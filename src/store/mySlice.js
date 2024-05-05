import { createSlice } from "@reduxjs/toolkit";
import man1 from "../assits/3-min.jpg";

const initialState = {
  myData: {
    id: 1,
    name: "John Williams",
    main: false,
    inStage: false,
    activeCam: true,
    activeMic: true,
    type: "img",
    src: man1,
  },
  loading: false,
  error: null, // Initialize error as null or an Error object
};

const mySlice = createSlice({
  name: "my",
  initialState,
  reducers: {
    HandleUpdateData: (state, action) => {
      state.myData = action.payload;
    },

    handleToggleMicMY: (state, action) => {
      const { id, state: newState } = action.payload; // Destructure payload
      state.myData = { ...state.myData, activeMic: newState };
    },
    handleToggleCamMY: (state, action) => {
      const { id, state: newState } = action.payload; // Destructure payload
      state.myData = { ...state.myData, activeCam: newState };
    },
    handleToggleCamMicMY: (state, action) => {
      const { id, state: newState } = action.payload; // Destructure payload
      state.myData = {
        ...state.myData,
        activeCam: newState,
        activeMic: newState,
      };
    },
  },
  extraReducers: (builder) => {},
});

export default mySlice.reducer;

export let {
  handleToggleMicMY,
  handleToggleCamMY,
  handleToggleCamMicMY,
  HandleUpdateData,
} = mySlice.actions;
