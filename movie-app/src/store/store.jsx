import { configureStore } from '@reduxjs/toolkit';
import fetchMoviesReducer from './movieSlice';
import latestMoviesReducer from './latestMoviesSlice';
import upcomingMoviesReducer from './upcomingMoviesSlice';
import bookMovieTicketReducer from './bookMovieTicketSlice';

const store  = configureStore({
    reducer: {
        movies: fetchMoviesReducer,
        latestMovies: latestMoviesReducer,
        upcomingMovies: upcomingMoviesReducer,
        bookMovieTicket: bookMovieTicketReducer,
    },
});

export default store;