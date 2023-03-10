import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCu8irDCYB1bvgcbSSXFeLjzxluT9iuYEU",
    authDomain: "work99-3fb36.firebaseapp.com",
    projectId: "work99-3fb36",
    storageBucket: "work99-3fb36.appspot.com",
    messagingSenderId: "1024690494471",
    appId: "1:1024690494471:web:5954f3b5fa4a5e84e2dea2"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const UserRef = collection(db, "user");
export default UserRef;