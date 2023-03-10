import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { getFirestore } from 'firebase/firestore'

import App from './App.vue';
import router from './router';

import 'bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCu8irDCYB1bvgcbSSXFeLjzxluT9iuYEU",
  authDomain: "work99-3fb36.firebaseapp.com",
  projectId: "work99-3fb36",
  storageBucket: "work99-3fb36.appspot.com",
  messagingSenderId: "1024690494471",
  appId: "1:1024690494471:web:5954f3b5fa4a5e84e2dea2"
};
const initFirebase = initializeApp(firebaseConfig);
export const db = getFirestore(initFirebase);
const app = createApp(App);
app.use(createPinia());
app.use(router);
app.mount('#app');