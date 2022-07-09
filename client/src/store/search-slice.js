import { createSlice } from "@reduxjs/toolkit";


const searchSlice = createSlice({
    name: 'search',
    initialState: { visibility: false },
    reducers: {
        searchOn(state) {
            state.visibility = true
        },
        searchOff(state) {
            state.visibility = false
        }
    }
});

export const searchActions = searchSlice.actions;
export default searchSlice;