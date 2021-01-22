import React from 'react';
import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyDJeWe8k_PFvQ6iDvccE2udlufoaAXWE4M",
    authDomain: "chat-app-d4870.firebaseapp.com",
    projectId: "chat-app-d4870",
    storageBucket: "chat-app-d4870.appspot.com",
    messagingSenderId: "958856448694",
    appId: "1:958856448694:web:1597f5a3c2f1d088d3f417",
    measurementId: "G-0C5N18BB3C"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


export default firebase;
