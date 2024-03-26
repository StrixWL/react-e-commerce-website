import firebase from 'firebase';

export const port = 3000
const firebaseConfig = {
    apiKey: "AIzaSyBfbD99SVfeFhU4H5exKnfiofmb7yYDyv4",
    authDomain: "ecommerce-cbfcf.firebaseapp.com",
    databaseURL: "https://ecommerce-cbfcf-default-rtdb.firebaseio.com",
    projectId: "ecommerce-cbfcf",
    storageBucket: "ecommerce-cbfcf.appspot.com",
    messagingSenderId: "1071280812545",
    appId: "1:1071280812545:web:42a3616ab87607354c8600",
    measurementId: "G-CXD72LGB9H"
};

if (!firebase.apps.length)
	firebase.initializeApp(firebaseConfig);