import { createSlice } from '@reduxjs/toolkit';

const chatSlice = createSlice({
    name: 'chat',
    initialState: { isChatOn: false },
    reducers: {
        chatOn(state) {
            state.isChatOn = true;
        },
        chatOff(state) {
            state.isChatOn = false
        }
    }
});

export const chatActions = chatSlice.actions;

export default chatSlice;