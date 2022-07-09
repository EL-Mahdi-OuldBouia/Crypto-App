import React from 'react';
import './LogPage.css';
import SignIn from '../SignIn/SignIn';
import SignUp from '../SignUp/SignUp';
import logo from '../../imgs/logot.png';
import { useState } from 'react';
import { useSelector } from 'react-redux';


const LogPage = () => {
    const createAccount = useSelector(state => state.createAccount.createAccount);


    return (
        <div className='log-page'>
            Welcome To Our Website
            <img src={logo} alt="" />

            {!createAccount ? <SignIn /> : <SignUp />}
        </div>
    )
}

export default LogPage