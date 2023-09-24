import { createSlice } from "@reduxjs/toolkit";


const gptSlice = createSlice({
    name: 'gpt',
    initialState: {
        showGptSearch: false,
        Tmdbresult: null,
        movieNames: null,
    },
    reducers: {
        togglegptsearchview: (state) => {
            state.showGptSearch = !state.showGptSearch;
        },
        addgptmovieresult: (state, action) => {
            const { movieNames, Tmdbresult } = action.payload;
            state.Tmdbresult = Tmdbresult;
            state.movieNames = movieNames;
        }
    },
});


export const { togglegptsearchview, addgptmovieresult } = gptSlice.actions;

export default gptSlice.reducer;