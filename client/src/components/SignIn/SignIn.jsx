import { useDispatch, useSelector } from 'react-redux';
import { createAccountActions } from '../../store/createAccount-slice';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';

import './SignIn.css';
import { db } from '../../firebase';
import { collection, getDocs, getDoc, addDoc, updateDoc, deleteDoc, doc, where, query, setDoc } from 'firebase/firestore/lite';
import { userEmailAction } from '../../store/user-email-slice';


const SignIn = () => {
    const [state, setState] = useState(false);
    const [email, setEmail] = useState('');
    const userEmail = useSelector(state => state.userEmail.userEmail);
    const logIn = async () => {
        const data = await getDocs(collection(db, 'users'));
        const userExists = data.docs.filter((doc) => doc.data().userEmail === email);
        if (userExists.length) {
            setState(true);
            dispatch(userEmailAction.setUserEmail(email));
            console.log('the user Email ', userEmail);
        } else {
            setState(false);
        }
    }
    const dispatch = useDispatch();
    const goToSignUp = () => {
        dispatch(createAccountActions.changeStateToTrue())
    }
    return (
        <div className='sign-in'>
            <form action="">
                <div className="containerS email">
                    <label htmlFor="email">Email:</label>
                    <input type="email" name="email" placeholder='email@email.com' onChange={e => setEmail(e.target.value)} />
                </div>

                <div className="containerS password">
                    <label htmlFor="password">Password:</label>
                    <input type="password" />
                </div>
            </form>
            <div className="log-create">
                <NavLink to={state ? '/' : '/logpage'} id="log-in-btn" onClick={logIn} >Log In</NavLink>
                or
                <button id='sign-up-btn' onClick={goToSignUp}>sign up</button>
            </div>


        </div>
    )
}

export default SignIn