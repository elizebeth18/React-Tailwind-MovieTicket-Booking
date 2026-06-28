import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const base_url = import.meta.env.VITE_API_URL;

const initialState = {
    nearByEvents: [],
    isLoading: false,
    error: null
}

export const nearByEventsThunk = createAsyncThunk('nearByEvents/fetch', async() => {
    const response = await axios.get(`${base_url}/events`);
    return response.data;
});


const nearByEventsSlice = createSlice({
    name: 'nearByEvents',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(nearByEventsThunk.pending, (state) => {
            state.isLoading = true;
            state.error = null;
        })
        .addCase(nearByEventsThunk.fulfilled, (state, action) => {
            state.isLoading = false;
            state.nearByEvents = [...action.payload];
        })
        .addCase(nearByEventsThunk.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.error?.message;
        })
    }
});

export default nearByEventsSlice.reducer;

