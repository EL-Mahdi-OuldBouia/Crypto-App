import { createSlice } from "@reduxjs/toolkit";



const createAccountSlice = createSlice({
    name: 'createAccount',
    initialState: { createAccount: false },
    reducers: {
        changeStateToTrue(state) {
            state.createAccount = true;
        },
        changeStateToFalse(state) {
            state.createAccount = false;
        }
    }
})

export const createAccountActions = createAccountSlice.actions;
export default createAccountSlice;