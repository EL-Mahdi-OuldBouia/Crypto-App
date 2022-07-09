import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore/lite';


const firebaseConfig = {
    apiKey: "AIzaSyD8FPyXDbTWU_YOo9Wz1jowODXEK8USdaU",
    authDomain: "crypto-currency-app-914b0.firebaseapp.com",
    projectId: "crypto-currency-app-914b0",
    storageBucket: "crypto-currency-app-914b0.appspot.com",
    messagingSenderId: "60176759412",
    appId: "1:60176759412:web:5c3a7edf38edd6ffb1ef21",
    measurementId: "G-YT4NXSDYGC"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

