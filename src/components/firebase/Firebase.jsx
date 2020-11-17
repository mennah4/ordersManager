import firebase from "firebase/app";
import "firebase/database";
import "firebase/auth";
import "firebase/storage";

const config = {
	apiKey: "AIzaSyARMI0RJ_bZqhiqUPskowBV4b0iwTH_M7A",
    authDomain: "react-firebase-task-mashkor.firebaseapp.com",
    databaseURL: "https://react-firebase-task-mashkor.firebaseio.com",
    projectId: "react-firebase-task-mashkor",
    storageBucket: "react-firebase-task-mashkor.appspot.com",
    messagingSenderId: "359072968531",
    appId: "1:359072968531:web:b078f970072388ed16fba6",
    measurementId: "G-DYXZ2X0415"
};

firebase.initializeApp(config);
const Firebase = firebase;
export default Firebase;
