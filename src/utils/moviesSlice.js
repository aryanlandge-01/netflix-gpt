import { createSlice } from "@reduxjs/toolkit";


const moviesSlice = createSlice({
    name: "movies",
    initialState: {
        nowPlayingMovies: null,
        TrailerVideo: null,
        PopularMovies: null,
        UpcomingMovies: null,
        TrendingMovies: null,
        Tvshows: null,
    },
    reducers: {
        addNowPlaying: (state, action) => {
            state.nowPlayingMovies = action.payload;
        },
        addTrailerVideo: (state, action) => {
            state.TrailerVideo = action.payload;
        },
        addPopularmovies: (state, action) => {
            state.PopularMovies = action.payload;
        },
        addUpcomingMovies: (state, action) => {
            state.UpcomingMovies = action.payload;
        },
        addTrendingMovies: (state, action) => {
            state.TrendingMovies = action.payload;
        },
        addTvshows: (state, action) => {
            state.Tvshows = action.payload;
        }
    }
});


export const { addNowPlaying, addTrailerVideo, addPopularmovies, addTrendingMovies, addUpcomingMovies, addTvshows } = moviesSlice.actions;

export default moviesSlice.reducer;