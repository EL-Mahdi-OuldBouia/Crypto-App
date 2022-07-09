import { createSlice } from '@reduxjs/toolkit';


const menuChatSlice = createSlice({  
    name: 'menuChat',
    initialState: { isMenuChatVisible: false },
    reducers: {
        menuVisible(state) {
            state.isMenuChatVisible = !state.isMenuChatVisible;
        },
        menuHidden(state) {
            state.isMenuChatVisible = false;
        }
    }
});

export const menuChatActions = menuChatSlice.actions;

export default menuChatSlice;