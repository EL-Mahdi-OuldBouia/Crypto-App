import { createSlice } from "@reduxjs/toolkit";



const userEmailSlice = createSlice({
    name: 'userEmail',
    initialState: { userEmail: '' },
    reducers: {
        setUserEmail(state, action) {
            state.userEmail = action.payload;
        },
        removeUserEmail(state) {
            state.userEmail = '';
        }
    }
});

export const userEmailAction = userEmailSlice.actions;

export default userEmailSlice;