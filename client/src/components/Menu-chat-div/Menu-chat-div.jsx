import React from 'react';
import './Menu-chat-div';

import alexImage from '../../imgs/logo.png';
import johnImage from '../../imgs/logo1.png';
import Friend from '../Friend/Friend';
import Room from '../Room/Room';

const MenuChatFriends = () => {
    const friends = [{ profileImage: alexImage, name: 'Alex' },
    { profileImage: johnImage, name: 'John' }];
    const chatRooms = [
        { roomName: 'room1' },
        { roomName: 'room2' }
    ];
    return (
        <div>
            {friends.map((friend) => {
                return (
                    <Friend img={friend.profileImage} name={friend.name} />
                )
            })}

            {chatRooms.map((room) => {
                return (
                    <Room roomName={room.roomName} />
                )
            })}


        </div>
    )
}

export default MenuChatFriends;