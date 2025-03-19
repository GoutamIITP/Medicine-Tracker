// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { getFirestore } from "firebase/firestore";
import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage";
// import { get } from "react-native/Libraries/TurboModule/TurboModuleRegistry";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getDatabase, ref, set, get } from "firebase/database";
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCm7BpWVM9tbPBFNWz2daU6b4OSKp_hApk",
  authDomain: "application-project-66211.firebaseapp.com",
  projectId: "application-project-66211",
  storageBucket: "application-project-66211.firebasestorage.app",
  messagingSenderId: "886424250868",
  appId: "1:886424250868:web:ccc3df54c9b3213c4371a1",
  measurementId: "G-WB44VGDHB1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Auth with AsyncStorage persistence
export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage),
});
// export const auth=getAuth(app);

export const db = getFirestore(app);