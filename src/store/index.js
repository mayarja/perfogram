import { combineReducers, configureStore } from "@reduxjs/toolkit";
import themeslice from "./theme";
import banners from "./bannersSlice";
import videos from "./videosSlice";
import graphics from "./graphicSlice";
import questions from "./questionSlice";
import polls from "./pollsSlice";
import viewers from "./viewersSlice";
import requests from "./requestSlice";
import logos from "./logoSlice";
import backgrounds from "./backgroundSlice";
import covers from "./coverSlice";
import socials from "./socialSlice";
import chatMeesages from "./chatSlice";
import users from "./usersSlice";
import myData from "./mySlice";
import all from "./allActionsSlice";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  version: 1,
  storage,
};

// Create a persistConfig for the auth slice
const AllactionPersistConfig = {
  key: "all",
  storage: storage,
};

const bannerPersistConfig = {
  key: "banner",
  storage: storage,
};

const videoPersistConfig = {
  key: "video",
  storage: storage,
};

const graphicPersistConfig = {
  key: "graphic",
  storage: storage,
};

const questionPersistConfig = {
  key: "question",
  storage: storage,
};

const pollPersistConfig = {
  key: "poll",
  storage: storage,
};

const viewerPersistConfig = {
  key: "viewer",
  storage: storage,
};

const requestPersistConfig = {
  key: "request",
  storage: storage,
};

const logoPersistConfig = {
  key: "logo",
  storage: storage,
};

const backgroundPersistConfig = {
  key: "background",
  storage: storage,
};

const coverPersistConfig = {
  key: "cover",
  storage: storage,
};

const socialsPersistConfig = {
  key: "social",
  storage: storage,
};

const chatMeesagePersistConfig = {
  key: "chatMeesage",
  storage: storage,
};

const usersPersistConfig = {
  key: "users",
  storage: storage,
};

const myDataPersistConfig = {
  key: "myData",
  storage: storage,
};

const customReducer = combineReducers({
  all: persistReducer(AllactionPersistConfig, all),
  banners: persistReducer(bannerPersistConfig, banners),
  videos: persistReducer(videoPersistConfig, videos),
  graphics: persistReducer(graphicPersistConfig, graphics),
  questions: persistReducer(questionPersistConfig, questions),
  polls: persistReducer(pollPersistConfig, polls),
  viewers: persistReducer(viewerPersistConfig, viewers),
  requests: persistReducer(requestPersistConfig, requests),
  logos: persistReducer(logoPersistConfig, logos),
  backgrounds: persistReducer(backgroundPersistConfig, backgrounds),
  covers: persistReducer(coverPersistConfig, covers),
  socials: persistReducer(socialsPersistConfig, socials),
  chatMeesages: persistReducer(chatMeesagePersistConfig, chatMeesages),
  users: persistReducer(usersPersistConfig, users),
  myData: persistReducer(myDataPersistConfig, myData),
});

const persistCustomReducer = persistReducer(persistConfig, customReducer);

let store = configureStore({
  reducer: {
    themeslice: themeslice,
    persistData: persistCustomReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export let persistor = persistStore(store);

export default store;
