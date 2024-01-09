
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyB_euEDTVXdDfPd8_qcQyLYFq0MGY42zXM",
  authDomain: "chatapp-e0f89.firebaseapp.com",
  projectId: "chatapp-e0f89",
  storageBucket: "chatapp-e0f89.appspot.com",
  messagingSenderId: "647571792051",
  appId: "1:647571792051:web:868b8d20a18a7b1dc950c6"
};
const app = initializeApp(firebaseConfig);
export const auth=getAuth()
export const db=getFirestore();
export const storage=getStorage();
