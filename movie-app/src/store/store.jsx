import { configureStore } from '@reduxjs/toolkit';
import fetchMoviesReducer from './movieSlice';

const store  = configureStore({
    reducer: {
        movies: fetchMoviesReducer
    },
});

export default store;