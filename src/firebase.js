import firebase from 'firebase/app';
require('firebase/firestore');

const firebaseConfig = firebase.initializeApp({
    apiKey: "AIzaSyDzcw_YqoIbRbt2C5qCt4DxJoMawr8O7L4",
    authDomain: "todolidst.firebaseapp.com",
    databaseURL: "https://todolidst.firebaseio.com",
    projectId: "todolidst",
    storageBucket: "todolidst.appspot.com",
    messagingSenderId: "402837141410",
    appId: "1:402837141410:web:c7ffaf88391ea8bcf224fb"
});

export {firebaseConfig as firebase};