import { createSlice } from '@reduxjs/toolkit';


const friendsAddedSlice = createSlice({
    name: 'friendsAdded',
    initialState: { friendsAdded: [] },
    reducers: {
        addFriend(state, action) {
            let s = state.friendsAdded.filter((friend) => friend.friendId === action.payload.friendId)
            if (s.length === 0) {
                state.friendsAdded = [...state.friendsAdded, action.payload];
            }
        },
        removeFriend(state, action) {
            state.friendsAdded = state.friendsAdded.filter((friend) =>
                friend.friendId !== action.payload
            );
        }
    }
})

export const friendsAddedActions = friendsAddedSlice.actions;
export default friendsAddedSlice;