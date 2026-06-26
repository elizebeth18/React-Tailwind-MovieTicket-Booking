import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const base_url = import.meta.env.VITE_API_URL;

const initialState = {
    loading: false,
    error: "",
    transaction: {}
}

export const bookMovieTicketThunk = createAsyncThunk('bookMovieTicket/post', async (data) => {
    const response = await axios.post(`${base_url}/transactions`, JSON.stringify(data),{
        headers: {
            'accept': 'application/json',
            'Content-Type': 'application/json'
        }
    });

    return response.data;
});

const bookMovieTicketSlice = createSlice({
    name: 'bookMovieTicket',
    initialState,
    reducers:{},
    extraReducers: (builder) =>{
        builder.addCase(bookMovieTicketThunk.pending, (state) => {
            state.loading = true;
            state.error = null;
        }).addCase(bookMovieTicketThunk.fulfilled,(state, action) => {
            state.loading = false;
            console.log(action.payload)
            state.transaction = action.payload;
        }).addCase(bookMovieTicketThunk.rejected,(state, action) => {
            state.loading = false;
            state.error = action.error.message
        })
    }
});

export default bookMovieTicketSlice.reducer;