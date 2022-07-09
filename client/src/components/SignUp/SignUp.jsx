import React, { useState } from 'react';   
import { db } from '../../firebase';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { Link, Navigate } from 'react-router-dom';
import { createAccountActions } from '../../store/createAccount-slice';
import { collection, getDocs, getDoc, addDoc, updateDoc, deleteDoc, doc, where, query, setDoc } from 'firebase/firestore/lite';
import './SignUp.css';
import { useDispatch } from 'react-redux';

const SignUp = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmedPassword, setConfirmedPassword] = useState('');
    const [showPass, setShowPass] = useState(true);
    const [showPassCon, setShowPassCon] = useState(true);
    const dispatch = useDispatch();
    const goToSignIn = () => {
        dispatch(createAccountActions.changeStateToFalse());
    }

    const checkEmail = () => {
        let regex = new RegExp("^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$");

        if ((!regex.test(email) && (email === ''))) {
            alert('Please enter a valid email');
            return false;
        } else {
            return true;
        }
    }
    const checkPassword = () => {
        if (password !== confirmedPassword) {
            alert("your retyped password doesn't match")
            return false;
        } else {
            return true;
        }

    }
    const signUpUser = () => {
        let check1 = checkEmail();
        let check2 = checkPassword();
        if (check1 && check2) {
            // Add the user to the database 
            // under the conditions of password and email
            // without adding multiple users into the database
            createUser();
            setPassword('');
            setConfirmedPassword('');
            setUsername('');
            setEmail('');
        }

    }

    // Manipulate the database
    const usersCollectionRef = collection(db, "users");
    const getUsers = async () => {
        const data = await getDocs(usersCollectionRef);
        console.log('Users data ', data.docs.map((doc) => doc.data()));
    }

    const createUser = async () => {
        const data = await getDocs(usersCollectionRef);
        const length = data.docs.map((doc) => doc.data()).length + 1;
        const exist = data.docs.filter((doc) => doc.data().userEmail === email);
        let check1 = checkEmail();
        let check2 = checkPassword();
        console.log('the number of users', length);
        if (check1 && check2) {
            if (!exist.length && (email !== '') && username !== 0) {
                await addDoc(usersCollectionRef, { userEmail: email, userId: `${length}`, userName: username });
                createUser();
                setPassword('');
                setConfirmedPassword('');
                setUsername('');
                setEmail('');
                goToSignIn();
            } else {
                alert('the email you entered is already a user')
            }
        }
    }


    const getUserUndercdt = async () => {
        const usersRef = collection(db, 'users');
        const q = query(usersRef, where("userName", "==", "Jake"));
        const querySnapShot = await getDocs(q);
        console.log('here is the query', querySnapShot.docs.map((doc) => doc.data()));
        // Update the query element 
        const userDoc = await getDocs(collection(db, "users/" + querySnapShot.docs[0].id + "/messages"));
        // console.log('hh', collection(`users/${querySnapShot.docs[0].id}/messages`))
        console.log('hello', userDoc.docs.map((doc) => doc.data()));

        console.log(querySnapShot.docs[0].id);

        await updateDoc(doc(db, "users/" + querySnapShot.docs[0].id + "/more-details/test"), {
            numberOfFriends: 3,
            address: "Agadir",
            zipCode: 52000,
        })
    }

    const updateUser = async (id) => {
        const userDoc = doc(db, "users", id);
        const newFields = { friends: 'newFriend' };
        await updateDoc(userDoc, newFields);
    }

    const deleteUser = async (id) => {
        const userDoc = doc(db, "users", id);
        await deleteDoc(userDoc);
    }

    // 
    return (
        <div className='sign-up'>
            <form action="">
                <div className="containerS username">
                    <label htmlFor="username">Username:</label>
                    <input type="text" placeholder='John123...' name="username" onChange={e => setUsername(e.target.value)} value={username} />
                </div>
                <div className="containerS email">
                    <label htmlFor="email">Email:</label>
                    <input type="email" name='email' placeholder='email@email.com' onChange={e => setEmail(e.target.value)} value={email} />
                </div>
                <div className="containerS password">
                    <label htmlFor="password"  >Password:</label>
                    <input type={showPassCon ? "password" : "text"} maxlength="20" onChange={e => setPassword(e.target.value)} />
                    {showPassCon ? <FaEye className='iconPass' onClick={() => setShowPassCon(false)} /> :
                        <FaEyeSlash className='iconPass' onClick={() => setShowPassCon(true)} />}
                </div>
                <div className="containerS confirm-password password">
                    <label htmlFor="confirm">Confirm Password:</label>
                    <input type={showPass ? "password" : "text"} name='confirm' maxlength="20" onChange={e => setConfirmedPassword(e.target.value)} />
                    {showPass ? <FaEye className='iconPass' onClick={() => setShowPass(false)} />
                        : <FaEyeSlash className='iconPass' onClick={() => setShowPass(true)} />}
                </div>
            </form>
            <button id='sign-up-btn' onClick={createUser}>Sign up</button>
        </div>
    )
}

export default SignUp