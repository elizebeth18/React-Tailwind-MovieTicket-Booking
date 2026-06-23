import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

export const base_url = import.meta.env.VITE_API_URL;

const initialState = {
    latestMovies: [],
    filteredLatestMovies: [],
    isLoading: false,
    error: null
}

export const latestMoviesThunk = createAsyncThunk('latestMovies/fetch', async () =>{
    const response = await axios.get(`${base_url}/latestMovies`);
    //console.log(response)
    return response.data;
});

const latestMoviesSlice = createSlice({
    name: 'latestMovies',
    initialState,
    reducers:{
        searchLatestMovies: (state, action) => {
            state.filteredLatestMovies = state.latestMovies.filter(movie =>{
                return movie.title.toLowerCase().includes(action.payload.toLowerCase())
            });
        }
    },
    extraReducers: (builder) => {
        builder.addCase(latestMoviesThunk.pending, (state) => {
            state.isLoading = true;
        })
        .addCase(latestMoviesThunk.fulfilled, (state, action) => {
            state.isLoading = false;
            state.latestMovies = [...action.payload]
        })
        .addCase(latestMoviesThunk.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.error?.message;
        })
    }
});

export const { searchLatestMovies } = latestMoviesSlice.actions;
export default latestMoviesSlice.reducer;