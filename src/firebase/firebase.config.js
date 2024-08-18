// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBh1TSPyOH12Dtxg5VTF25ZljFwOSLtyuI",
    authDomain: "computer-courses-carrier.firebaseapp.com",
    projectId: "computer-courses-carrier",
    storageBucket: "computer-courses-carrier.appspot.com",
    messagingSenderId: "152848541417",
    appId: "1:152848541417:web:7cd75931a63de86a4bf278",
    measurementId: "G-B5X4YDGM4F"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default app;