import { initializeApp } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyCoPAJ6Axi8cz06Qzmwl_rRacB3_lM6ifc",
  authDomain: "atithiq-26ee6.firebaseapp.com",
  projectId: "atithiq-26ee6",
  storageBucket: "atithiq-26ee6.firebasestorage.app",
  messagingSenderId: "98984539215",
  appId: "1:98984539215:web:0eb3008c8732ce3ffc663a"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
