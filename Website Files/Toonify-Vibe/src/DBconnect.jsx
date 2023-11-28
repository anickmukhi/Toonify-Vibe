import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC8kA7QdlHFQm0gQKISgl6nC-S41I5CeZ4",
  authDomain: "toonifyvibe.firebaseapp.com",
  databaseURL: "https://toonifyvibe-default-rtdb.firebaseio.com",
  projectId: "toonifyvibe",
  storageBucket: "toonifyvibe.appspot.com",
  messagingSenderId: "184937477686",
  appId: "1:184937477686:web:d368b57e827827f53d8a97",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const imgDB = getStorage(app);
const txtDB = getFirestore(app);

export { imgDB, txtDB };
