import { configureStore } from '@reduxjs/toolkit';
import fetchMoviesReducer from './movieSlice';
import latestMoviesReducer from './latestMoviesSlice';
import upcomingMoviesReducer from './upcomingMoviesSlice';
import bookMovieTicketReducer from './bookMovieTicketSlice';
import nearByEventsReducer from './nearByEventsSlice';

const logger = store => next => action => {

    console.log(
        "ACTION:",
        action.type
    );

    const result = next(action);

    console.log(
        "STATE:",
        store.getState()
    );

    return result;
};

const store  = configureStore({
    reducer: {
        movies: fetchMoviesReducer,
        latestMovies: latestMoviesReducer,
        upcomingMovies: upcomingMoviesReducer,
        bookMovieTicket: bookMovieTicketReducer,
        nearByEvents: nearByEventsReducer,
    },
    middleware:
        getDefaultMiddleware =>
        getDefaultMiddleware()
        .concat(logger)
});

export default store;