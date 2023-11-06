import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "../utilies/axios";

const userSlice = createSlice({
    name: 'user',
    initialState: {
        user: null,
        status: 'Loading',
    },
    reducers: {

    },
    extraReducers: (builder) => {
        builder.addCase(fetchUser.fulfilled, (state, action) => {
            state.user = action.payload;
        })
    }
});

// export const {} = userSlice.actions;
export default userSlice.reducer;

export const fetchUser = createAsyncThunk('user/fetch', async () => {
    const data = await axios.get('/user');
    return {data};
});