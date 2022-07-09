import React from 'react';
import './Chat-menu.css';
import { searchActions } from '../../store/search-slice';
import { menuChatActions } from '../../store/chat-menu-slice';
import { friendsActions } from '../../store/friends-slice';
import { useDispatch } from 'react-redux';
import { groupsActions } from '../../store/groups-slice';

const ChatMenu = () => {
    const dispatch = useDispatch();
    const changeSearchVisibility = () => {
        dispatch(searchActions.searchOn());
        dispatch(menuChatActions.menuHidden())
    }
    const changeFriendsVisibility = () => {
        dispatch(friendsActions.friendsOn());
    };
    const changeGroupsVisibility = () => {
        dispatch(groupsActions.groupsOn())
    }
    return (
        <div className='chat-menu'>
            <p>Chat</p>
            <div className="btns">
                <button onClick={changeFriendsVisibility}>Friends Online</button>
                <button onClick={changeGroupsVisibility}>Chat Rooms</button>
                <button onClick={changeSearchVisibility}>Search for friends</button>
            </div>
        </div>
    )
}

export default ChatMenu;