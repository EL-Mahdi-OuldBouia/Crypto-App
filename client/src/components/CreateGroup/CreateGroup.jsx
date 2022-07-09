import React from 'react';
import './CreateGroup.css';
import Friend from '../Friend/Friend';
import friends from '../../friendsJSON';
import image from '../../imgs/crypto15.jpg';
import { useSelector } from 'react-redux';
import { FaTimes, FaMinus } from 'react-icons/fa';

const CreateGroup = () => {
    const friendsAdded = useSelector(state => state.friendsAdded.friendsAdded);
    let lengthFriendsAdded = friendsAdded.length;
    console.log('length of friends added', friendsAdded);
    return (
        <div className='create-group'>
            <nav className="nav-create-group">
                <FaMinus className='icon' id='i1' />
                <FaTimes className='icon' id='i2' />
            </nav>
            <div className="body-create-group">
                <label htmlFor="input">Group name: </label>
                <input type="text" placeholder="name of group.." />
                <div className="add-friends">
                    <div className="friends friends-added">
                        <div className="title friendsAdded">Added Friends</div>
                        {lengthFriendsAdded > 0 && friendsAdded.map((friend) => {
                            return (<Friend fromRemove={true} friend={friend} fromAdd={true} userName={friend.userName} userImage={image} />)
                        })}
                    </div>
                    <div className="friends available-friends">
                        <div className="title your-friends">Your Friends</div>
                        {friends.map((friend) => {
                            return (<Friend friend={friend} fromAdd={true} userName={friend.userName} userImage={image} />)
                        })}
                    </div>
                </div>
            </div>
            <footer className="footer-create-group">
                <button className="create">Create group</button>

            </footer>
        </div>
    )
}
export default CreateGroup