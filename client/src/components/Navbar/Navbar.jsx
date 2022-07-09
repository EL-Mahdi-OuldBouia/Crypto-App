import React from 'react';
import './Navbar.css';
import { NavLink } from 'react-router-dom';
import ChatMenu from '../Chat-menu/Chat-menu';
import { motion } from 'framer-motion';
import { FaSun, FaMoon, FaTimes } from 'react-icons/fa';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { chatActions } from '../../store/chat-slice';
import { menuChatActions } from '../../store/chat-menu-slice';
import { searchActions } from '../../store/search-slice';
import { friendsActions } from '../../store/friends-slice';
import { groupsActions } from '../../store/groups-slice';
import Friend from '../Friend/Friend';
import friends from '../../friendsJSON';
import Group from '../Group/Group';

// Importing Images 

import Logo from '../../imgs/logot.png';
import image1 from '../../imgs/crypto4.jpg';
import image2 from '../../imgs/crypto8.jpg';
import image3 from '../../imgs/crypto15.jpg';




const Navbar = () => {
    const [mode, setMode] = useState(true);
    const searchVisibility = useSelector(state => state.search.visibility);
    const isChatOn = useSelector(state => state.chat.isChatOn);
    const friendsVisibility = useSelector(state => state.friends.friendsVisibility);
    const isMenuChatVisible = useSelector(state => state.menuChat.isMenuChatVisible);
    const groupsVisibility = useSelector(state => state.groups.groupsVisibility);
    const dispatch = useDispatch();
    const changeChat = () => {
        dispatch(menuChatActions.menuVisible());
        console.log(isChatOn, 'menu chat state', isMenuChatVisible);
    }

    const removeSearch = () => {
        dispatch(searchActions.searchOff());
    }
    const toggleFriends = () => {
        dispatch(friendsActions.friendsOff());
    }
    const removeGroups = () => {
        dispatch(groupsActions.groupsOff());
    }
    console.log(isChatOn);
    const variants = {
        light: {
            x: 0
        },
        dark: {
            x: 32
        }
    }
    console.log('isMenuChatVisible', isMenuChatVisible);

    const groups = [
        { groupName: 'group 1', groupImage: image1 },
        { groupName: 'group 2', groupImage: image2 },
        { groupName: 'group 2', groupImage: image2 },
        { groupName: 'group 2', groupImage: image2 },
        { groupName: 'group 2', groupImage: image2 },
        { groupName: 'group 3', groupImage: image3 }
    ]

    // Retrieving data from API that contains All frends and their chatc with the objective user
    // After the user logs in all the data related to chat is retrieved
    // in this example we suppose that we have already retrieved it 



    return (
        <div className='navbar'>
            <div className="logo">
                <img src={Logo} alt="Logo" id='logo' />
            </div>
            <div className="pages-container">
                <div className="pages">
                    <NavLink to='/'>Home</NavLink>
                    <NavLink to='/news'>News</NavLink>
                    <NavLink to='/logpage'>Logpage</NavLink>
                    <NavLink to='/crypto-market'>Crypto-Market</NavLink>
                    <div className="chat">
                        <NavLink to='/' onClick={changeChat}>Chat</NavLink>
                        {isMenuChatVisible && <div className="chat-menu-home">
                            <ChatMenu />
                            {friendsVisibility && <div className="friends-container">
                                <div className="toggle-friends-chat">
                                    <FaTimes className='icon' onClick={toggleFriends} />
                                </div>
                                {true && friends.map((friend) => {
                                    return (<Friend friend={friend}
                                        userImage={friend.userImage}
                                        userName={friend.userName} />)
                                }
                                )}
                            </div>}
                            {groupsVisibility &&
                                <div className='chat-rooms'>
                                    <div className="chat-rooms-menu">
                                        <nav>
                                            <button className="">Create Group</button>
                                            <span> <FaTimes className='icon' onClick={removeGroups} /> </span>
                                        </nav>
                                        {
                                            groups.map((group) => {
                                                return (
                                                    <Group groupName={group.groupName} groupImage={group.groupImage} />
                                                )
                                            })
                                        }
                                    </div>

                                </div>}
                        </div>}
                    </div>
                    <NavLink to='/cryptocurrencies'>Cryptocurrencies</NavLink>
                </div>

                {searchVisibility && <div className='search-friends'>
                    <input type='search' placeholder='Search for friends' />
                    <FaTimes className='icon' onClick={removeSearch} />
                </div>}
            </div>
            <div className="mode">
                <span className='mode-container'>
                    <motion.span onClick={() => setMode(!mode)}
                        animate={mode ? 'light' : 'dark'}
                        variants={variants}
                        className={mode ? 'dark' : 'light'}>
                        {mode ? <FaSun className='icon' style={{ color: '#F9FFA4' }} /> :
                            <FaMoon className='icon' style={{ color: '#413F42' }} />}
                    </motion.span>
                </span>
            </div>
        </div>
    )
}

export default Navbar