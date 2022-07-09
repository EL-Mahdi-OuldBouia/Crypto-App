import React from 'react';
import './Room.css';

const Room = ({ roomName }) => {
    return (
        <div className='room'>
            <span className='room-name'>
                {roomName}
            </span>
        </div>
    )
}

export default Room;