// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBZEuCcWeUT1VbE4zmJL_WfsBHld7TGuNI",
    authDomain: "netflix-gpt-fc38c.firebaseapp.com",
    projectId: "netflix-gpt-fc38c",
    storageBucket: "netflix-gpt-fc38c.appspot.com",
    messagingSenderId: "355189783336",
    appId: "1:355189783336:web:bb0cca67984774964bee1d",
    measurementId: "G-FZHHXM2P8R"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


export const auth = getAuth();