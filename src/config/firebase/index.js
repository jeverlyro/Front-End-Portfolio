import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDr16k6PqlJAoXvxXmfejv_aeLfs9mONaA",
  authDomain: "portfolio-df2ef.firebaseapp.com",
  databaseURL:
    "https://portfolio-df2ef-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "portfolio-df2ef",
  storageBucket: "portfolio-df2ef.firebasestorage.app",
  messagingSenderId: "848409074670",
  appId: "1:848409074670:web:c4ddc3bbab0e0f66ab8cff",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
