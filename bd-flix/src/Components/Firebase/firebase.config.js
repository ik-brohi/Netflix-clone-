// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//     apiKey: "AIzaSyBrEBFuj4FmNGJ5feYS_z0IotRG4057VTA",
//     authDomain: "bdflix-36bd3.firebaseapp.com",
//     projectId: "bdflix-36bd3",
//     storageBucket: "bdflix-36bd3.appspot.com",
//     messagingSenderId: "784814104779",
//     appId: "1:784814104779:web:3f40a35bfb7fd896037b4e",
//     measurementId: "G-T8VZ997JV2",

// };
const firebaseConfig = {
    apiKey: "AIzaSyDO-wl5EebwtLvEPn6xK6vjdgrVv3MC3so",
    authDomain: "bd-flix-e2343.firebaseapp.com",
    databaseURL: "https://bd-flix-e2343-default-rtdb.firebaseio.com",
    projectId: "bd-flix-e2343",
    storageBucket: "bd-flix-e2343.appspot.com",
    messagingSenderId: "515824560330",
    appId: "1:515824560330:web:d83811024df8f1f6e96c33",
    measurementId: "G-9XL447LJ9F"
  };
// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);