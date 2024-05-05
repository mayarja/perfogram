import { createSlice } from "@reduxjs/toolkit";
import girl1 from "../assits/1-min.jpg";
import girl2 from "../assits/2-min.jpg";
import man1 from "../assits/3-min.jpg";
import man2 from "../assits/4-min.jpg";
import girl3 from "../assits/5-min.jpg";
import man3 from "../assits/6-min.jpg";
import girl4 from "../assits/7-min.jpg";
import girl5 from "../assits/8-min.jpg";
const initialState = {
  Users: [
    {
      id: 1,
      name: "John Williams",
      main: false,
      inStage: false,
      activeCam: true,
      activeMic: true,
      type: "img",
      src: man1,
    },
    {
      id: 2,
      name: "Lisa Wilson",
      type: "img",
      main: false,
      inStage: false,
      activeCam: true,
      activeMic: false,
      src: girl5,
    },
    {
      id: 3,
      name: "Sam Mitchell",
      type: "img",
      main: false,
      inStage: false,
      activeCam: true,
      activeMic: true,
      src: man2,
    },

    {
      id: 4,
      name: "Ava Evans",
      type: "img",
      main: false,
      inStage: false,
      activeCam: true,
      activeMic: true,
      src: girl2,
    },

    {
      id: 5,
      name: "Jack Jones",
      type: "img",
      main: false,
      inStage: false,
      activeCam: true,
      activeMic: true,
      src: man3,
    },

    {
      id: 6,
      name: "Emily Thomas",
      type: "img",
      main: false,
      inStage: false,
      activeCam: true,
      activeMic: true,
      src: girl3,
    },

    {
      id: 7,
      name: "Isla Wilson",
      type: "img",
      main: false,
      inStage: false,
      activeCam: true,
      activeMic: true,
      src: girl1,
    },

    {
      id: 8,
      name: "Mia Hughes",
      type: "img",
      main: false,
      inStage: false,
      activeCam: true,
      activeMic: true,
      src: girl4,
    },

    {
      id: 9,
      name: "Harry Williams",
      type: "img",
      main: false,
      inStage: false,
      activeCam: true,
      activeMic: true,
      src: man1,
    },

    {
      id: 10,
      name: "Oliver Smith",
      type: "img",
      main: false,
      inStage: false,
      activeCam: true,
      activeMic: true,
      src: man2,
    },
    {
      id: 11,
      name: "Ahmed Dubosh",
      type: "img",
      main: false,
      inStage: false,
      activeCam: true,
      activeMic: true,
      src: man3,
    },
    {
      id: 12,
      name: "Sophia Clark",
      type: "img",
      main: false,
      inStage: false,
      activeCam: true,
      activeMic: true,
      src: girl5,
    },

    {
      id: 14,
      name: "Lily Wright",
      type: "img",
      main: false,
      inStage: false,
      activeCam: true,
      activeMic: true,
      src: girl2,
    },
    {
      id: 15,
      name: "Ethan Mitchell",
      type: "img",
      main: false,
      inStage: false,
      activeCam: false,
      activeMic: true,
      src: man3,
    },
  ],
  mic: true,
  cam: true,
  stopMicCam: false,
  loading: false,
  error: null, // Initialize error as null or an Error object
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    HandleAddNewUser: (state, action) => {
      state.Users.push(action.payload);
    },
    manageUsers: (state, action) => {
      console.log("action.payload", action.payload);
      state.Users = action.payload;
    },
    handleToggleMic: (state, action) => {
      const { id, state: newState } = action.payload; // Destructure payload
      state.Users = state.Users.map((user) =>
        user.id === id ? { ...user, activeMic: newState } : user
      );
    },
    handleToggleCam: (state, action) => {
      const { id, state: newState } = action.payload; // Destructure payload
      state.Users = state.Users.map((user) =>
        user.id === id ? { ...user, activeCam: newState } : user
      );
    },
    handleToggleCamMic: (state, action) => {
      const { id, state: newState } = action.payload; // Destructure payload
      state.Users = state.Users.map((user) =>
        user.id === id
          ? { ...user, activeCam: newState, activeMic: newState }
          : user
      );
    },
  },
  extraReducers: (builder) => {},
});

export default userSlice.reducer;

export let {
  manageUsers,
  handleToggleMic,
  handleToggleCam,
  handleToggleCamMic,
  HandleAddNewUser,
} = userSlice.actions;
