import { configureStore } from '@reduxjs/toolkit';
import fetchMoviesReducer from './movieSlice';
import latestMoviesReducer from './latestMoviesSlice';

const store  = configureStore({
    reducer: {
        movies: fetchMoviesReducer,
        latestMovies: latestMoviesReducer,
    },
});

export default store;