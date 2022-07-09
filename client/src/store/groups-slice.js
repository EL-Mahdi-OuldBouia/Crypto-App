import { createSlice } from '@reduxjs/toolkit';


const groupsSlice = createSlice({
    name: 'groups',
    initialState: { groupsVisibility: false },
    reducers: {
        groupsOn(state) {
            state.groupsVisibility = !state.groupsVisibility;
        },
        groupsOff(state) {
            state.groupsVisibility = false;
        }
    }
})

export const groupsActions = groupsSlice.actions;

export default groupsSlice;