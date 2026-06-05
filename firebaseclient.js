import { initializeApp, getApps, getApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyARCIcI6733F_LnbwxMCsu8cX_jSjg9-c4",
  authDomain: "algonexus-8cb8b.firebaseapp.com",
  databaseURL: "https://algonexus-8cb8b-default-rtdb.firebaseio.com",
  projectId: "algonexus-8cb8b",
  storageBucket: "algonexus-8cb8b.firebasestorage.app",
  messagingSenderId: "573835131443",
  appId: "1:573835131443:web:57d186e158d9a99363c146",
};


const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getDatabase(app);
const auth = getAuth(app);

export { app, db, auth };