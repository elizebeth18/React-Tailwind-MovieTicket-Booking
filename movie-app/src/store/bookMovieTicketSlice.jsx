import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const base_url = import.meta.env.VITE_API_URL;

const initialState = {
    loading: false,
    error: "",
    transaction: {}
}

export const bookMovieTicketThunk = createAsyncThunk('bookMovieTicket/post', async (data, thunkAPI) => {

    try {

        const response = await axios.post(`${base_url}/transactions`, data, {
            headers: {
                'accept': 'application/json',
                'Content-Type': 'application/json'
            }
        });
        return response.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(
            error.response?.data ||
            error.message
        );
    }
});

const bookMovieTicketSlice = createSlice({
    name: 'bookMovieTicket',
    initialState,
    reducers: {},
    extraReducers: (builder) => {

        builder.addCase(bookMovieTicketThunk.pending, (state) => {
            console.log("PENDING");
            state.loading = true;
            state.error = null;
        });

        builder.addCase(bookMovieTicketThunk.fulfilled, (state, action) => {
            console.log("FULFILLED", action.payload);
            state.loading = false;
            console.log(action.payload)
            state.transaction = { ...action.payload };
        });

        builder.addCase(bookMovieTicketThunk.rejected, (state, action) => {
            console.log("REJECTED", action.error);
            state.loading = false;
            state.error = action.error?.message
        });
    }
});

export default bookMovieTicketSlice.reducer;