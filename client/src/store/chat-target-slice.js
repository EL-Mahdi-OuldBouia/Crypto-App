import { createSlice } from '@reduxjs/toolkit';


const chatTargetSlice = createSlice({
    name: 'chatTarget',
    initialState: { chatTarget: {} },
    reducers: {
        addFriend(state, action) {
            state.chatTarget = {};
            state.chatTarget = action.payload;
        }
    }
});

export const chatTargetActions = chatTargetSlice.actions;

export default chatTargetSlice;