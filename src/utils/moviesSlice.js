import { createSlice } from "@reduxjs/toolkit";


const moviesSlice = createSlice({
    name: "movies",
    initialState: {
        nowPlayingMovies: null,
        TrailerVideo: null,
    },
    reducers: {
        addNowPlaying: (state, action) => {
            state.nowPlayingMovies = action.payload;
        },
        addTrailerVideo: (state, action) => {
            state.TrailerVideo = action.payload;
        }
    }
});


export const { addNowPlaying, addTrailerVideo } = moviesSlice.actions;

export default moviesSlice.reducer;