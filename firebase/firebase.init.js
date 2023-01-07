// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA9_vqYZoAfsKE8PqGo67gXJcmJbs4MQAs",
  authDomain: "foody-3d5bb.firebaseapp.com",
  projectId: "foody-3d5bb",
  storageBucket: "foody-3d5bb.appspot.com",
  messagingSenderId: "688057995160",
  appId: "1:688057995160:web:49538d5155368446e665ed"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const initFirebase = () =>{
    return app;
}