import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const base_url = import.meta.env.VITE_API_URL;

const initialState = {
    isSuccess: false
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
            state.isSuccess = false
        }).addCase(bookMovieTicketThunk.fulfilled,(state, action) => {
            state.isSuccess = true;
            console.log(action.payload)
        }).addCase(bookMovieTicketThunk.rejected,(state) => {
            state.isSuccess = false;
        })
    }
});

export default bookMovieTicketSlice.reducer;