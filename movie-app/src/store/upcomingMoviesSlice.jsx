import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const base_url = import.meta.env.VITE_API_URL;

const initialState = {
    upcomingMovies: [],
    isLoading: false,
    error: null
}

export const upComingMoviesThunk = createAsyncThunk('upcomingMovies/fetch', async() => {
    const response = await axios.get(`${base_url}/upcomingMovies`);
    return response.data;
});


const upcomingMoviesSlice = createSlice({
    name: 'upcomingMovies',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(upComingMoviesThunk.pending, (state) => {
            state.isLoading = true;
        })
        .addCase(upComingMoviesThunk.fulfilled, (state, action) => {
            state.isLoading = false;
            state.upcomingMovies = [...action.payload];
        })
        .addCase(upComingMoviesThunk.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.error?.message;
        })
    }
});

export default upcomingMoviesSlice.reducer;

