import { configureStore } from '@reduxjs/toolkit';
import chatSlice from './chat-slice';
import menuChatSlice from './chat-menu-slice';
import searchSlice from './search-slice';
import friendsSlice from './friends-slice';
import groupsSlice from './groups-slice';
import chatTargetSlice from './chat-target-slice';
import friendsAddedSlice from './friends-added-slice';
import createAccountSlice from './createAccount-slice';
import userEmailSlice from './user-email-slice';


// Slices and global states

const store = configureStore({
    reducer: {
        chat: chatSlice.reducer,
        menuChat: menuChatSlice.reducer,
        search: searchSlice.reducer,
        friends: friendsSlice.reducer,
        groups: groupsSlice.reducer,
        chatTarget: chatTargetSlice.reducer,
        friendsAdded: friendsAddedSlice.reducer,
        createAccount: createAccountSlice.reducer,
        userEmail: userEmailSlice.reducer,
    }
});

export default store;