import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

export const base_url = import.meta.env.VITE_API_URL;

const initialState = {
    moviesList: [],
    //selectedMovie: {},
    filteredMoviesList: [],
    isLoading: false,
    error: null
}

export const fetchMovies = createAsyncThunk('movies/fetch', async() => {
    const response = await axios.get(`${base_url}/movies`);
    
    return(response.data);

});

const moviesSlice = createSlice({
    name: 'getMovies',
    initialState,
    reducers: {
        searchMovies: (state, action) => {
            state.filteredMoviesList = state.moviesList.filter((movie) => movie.title.trim().toLowerCase().includes(action.payload.trim()));
            //console.log(state.filteredMoviesList);
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchMovies.pending,(state) => {
            state.isLoading = true;
            state.moviesList = null;
        })
        builder.addCase(fetchMovies.fulfilled, (state, action) => {
            state.isLoading = false;
            //console.log(action.payload)
            state.moviesList = [...action.payload]
        })
        builder.addCase(fetchMovies.rejected,(state, action) => {
            state.isLoading = false;
            state.error = action.error?.message;
        })
    }
});

export const { searchMovies } = moviesSlice.actions;
export default moviesSlice.reducer;