// firebase.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getFirestore, collection, addDoc, getDocs } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyCdaXL5L1EeeaqF--vLLXxv203bJLe9VMs",
  authDomain: "abbos-go.firebaseapp.com",
  projectId: "abbos-go",
  storageBucket: "abbos-go.firebasestorage.app",
  messagingSenderId: "456018191223",
  appId: "1:456018191223:web:9dedf7010c3cc7f0737772",
  measurementId: "G-GHNJE2HCV3"
};

// Инициализация Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
