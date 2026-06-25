import { configureStore } from '@reduxjs/toolkit';
import fetchMoviesReducer from './movieSlice';
import latestMoviesReducer from './latestMoviesSlice';
import bookMovieTicketReducer from './bookMovieTicketSlice';

const store  = configureStore({
    reducer: {
        movies: fetchMoviesReducer,
        latestMovies: latestMoviesReducer,
        bookMovieTicket: bookMovieTicketReducer,
    },
});

export default store;