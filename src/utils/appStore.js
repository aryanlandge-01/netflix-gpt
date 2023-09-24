import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import moviesReducer from "./moviesSlice";
import gptReducer from "./gptSlice";
import configureReducer from "./ConfigSlice";

const appStore = configureStore(
    {
        reducer: {
            user: userReducer,
            movies: moviesReducer,
            gpt: gptReducer,
            config: configureReducer,
        }
    }
);

export default appStore;