import { createSlice } from '@reduxjs/toolkit';

const friendsSlice = createSlice({
    name: 'friends',
    initialState: { friendsVisibility: false },
    reducers: {
        friendsOn(state) {
            state.friendsVisibility = !state.friendsVisibility;
        },
        friendsOff(state) {
            state.friendsVisibility = false
        }
    }
});

export const friendsActions = friendsSlice.actions;

export default friendsSlice;