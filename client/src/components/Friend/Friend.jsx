import React from 'react';
import './Friend.css';
import { FaCommentAlt } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { chatActions } from '../../store/chat-slice';
import { chatTargetActions } from '../../store/chat-target-slice';
import { FaPlus, FaMinus } from 'react-icons/fa';
import { friendsAddedActions } from '../../store/friends-added-slice';


const Friend = ({ userImage, userName, friend, fromAdd, fromRemove }) => {
    const friendSample = useSelector(state => state.chatTarget.chatTarget);
    const friendsAdded = useSelector(state => state.friendsAdded.friendsAdded);
    const dispatch = useDispatch();
    const chatWithFriend = () => {
        dispatch(chatActions.chatOn());
        dispatch(chatTargetActions.addFriend(friend))
        console.log('Print of the friend sample ', friendSample);
    }
    const addFriend = () => {
        console.log('hello from add friend');
        dispatch(friendsAddedActions.addFriend(friend));
    }
    const removeFriend = () => {
        console.log("hello from remove friend");
        dispatch(friendsAddedActions.removeFriend(friend.friendId))
        console.log('this is the size of friends added: ', friendsAdded)
    }

    let span;
    if (!fromAdd) {
        span = true;
    } else {
        span = false;
    }
    

    return (
        <div className='friend'>
            <img src={userImage} alt={`userimage for ${userName} `} width="30" height='30' />
            <h5>{userName}</h5>
            {span ? <span ><FaCommentAlt className='icon' onClick={chatWithFriend} />
                <span className='notifications' >10</span></span> :
                (fromRemove ? <div className='minus'><FaMinus onClick={removeFriend} /></div>
                    : <div className='plus'><FaPlus onClick={addFriend} /></div>)
            }
        </div>
    )
}

export default Friend;