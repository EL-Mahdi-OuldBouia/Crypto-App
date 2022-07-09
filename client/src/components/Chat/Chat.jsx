import React from 'react';
import './Chat.css';
// import io from 'socket.io-client';
import logo from '../../imgs/logo.png';
import { FaMinus, FaTimes, FaPaperPlane, FaExpandArrowsAlt } from 'react-icons/fa';
import { useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { chatActions } from '../../store/chat-slice';

// const socket = io.connect("http://localhost:3001");


const Chat = () => {
    const [toggle, setToggle] = useState(true);
    const chatTarget = useSelector(state => state.chatTarget.chatTarget);
    const ref = useRef(null);
    const dragFun = (event) => {
        ref.current.style.right = '0';
        ref.current.style.right = ref.current.style.right + 10 + 'px';
        console.log('the width of the chat element', ref.current.style.right)
        console.log(`Positions of mouse on clickX position ${event.clientX}, Y position ${event.clientY}`)
    }

    const isChatOn = useSelector(state => state.chat.isChatOn);
    const dispatch = useDispatch();
    const changeChat = () => {
        dispatch(chatActions.chatOff());
        console.log(isChatOn);
    }
    return (
        <div className={!toggle ? 'chat2' : 'chatt'}
            // onMouseMove={dragMove}
            onClick={dragFun}
            ref={ref}>
            {!toggle &&
                <div className="nav">
                    <div className="nav-left"> <div className="image"><img src={logo} alt="logo" height='30' width='30' /></div>
                        <div className="name">
                            <h4>Mark</h4>
                        </div></div>
                    <div className="nav-right">
                        <div className="toggle-btn">

                            <FaExpandArrowsAlt className="tg-btn b2" onClick={() => setToggle(true)} />
                            <FaTimes className="tg-btn b2" onClick={changeChat} />
                        </div>
                        <div className="menu-chat">
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </div>
                </div>
            }
            {toggle && <><div className="nav">
                <div className="nav-left"> <div className="image"><img src={logo} alt="logo" height='30' width='30' /></div>
                    <div className="name">
                        <h4>{chatTarget.userName}</h4>
                    </div></div>
                <div className="nav-right">
                    <div className="toggle-btn">
                        <FaMinus className="tg-btn b1" onClick={() => setToggle(false)} />
                        <FaTimes className="tg-btn b2" onClick={changeChat} />
                    </div>
                    <div className="menu-chat">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
            </div>
                <div className="messages">
                    {chatTarget.chat.map((message) => {
                        return (<div className={message.sender === 'you' ? "message-you" : "message"}>
                            <p>{message.sender}</p>
                            <p>{message.message}</p>
                            <p className="time-stamp">{message.timeStamp}</p>
                        </div>)
                    })}


                </div>
                <div className="message-nav">
                    <textarea id="story" name="story" >
                    </textarea>
                    <FaPaperPlane className='paperPlane' />
                </div>
            </>}
        </div>
    )
}

export default Chat;