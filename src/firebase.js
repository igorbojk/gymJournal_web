// Import the Firebase modules that you need in your app.
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

// Initalize and export Firebase.
const config = {
    apiKey: "AIzaSyByBGh2c_eUbXY_yS1KbIvvNRO_lr2oFkw",
    authDomain: "gymgournal-5ee73.firebaseapp.com",
    databaseURL: "https://gymgournal-5ee73.firebaseio.com",
    projectId: "gymgournal-5ee73",
    storageBucket: "gymgournal-5ee73.appspot.com",
    messagingSenderId: "948999234749"
};
export default firebase.initializeApp(config);