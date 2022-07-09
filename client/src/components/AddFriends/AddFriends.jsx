import React, { useState } from 'react';
import { db } from '../../firebase';
import './AddFriends.css';
import { collection, getDocs } from 'firebase/firestore';

const AddFriends = () => {
    const [users, setUsers] = useState([]);
    const usersCollectionRef = collection(db, "users");
    const getUsers = async () => {
        const data = await getDocs(usersCollectionRef);
        console.log(data);
    }
    return (
        <div>

        </div>
    )
}

export default AddFriends