import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage} from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyD8O2yPx2PRx96WkFUdU6vWkShP67cYgp4",
    authDomain: "chat-ddeb9.firebaseapp.com",
    projectId: "chat-ddeb9",
    storageBucket: "chat-ddeb9.appspot.com",
    messagingSenderId: "615723076369",
    appId: "1:615723076369:web:a877aa2e08c9128cc21ab0"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()