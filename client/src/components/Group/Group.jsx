import React from 'react';
import './Group.css';

const Group = ({ groupName, groupImage }) => {
    return (
        <div className='group'>
            <img src={groupImage} alt="groupImage" />
            <button >Join {groupName}</button>
        </div>
    )
}

export default Group;