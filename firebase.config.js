import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
const firebaseConfig = {
  apiKey: "AIzaSyDj0OgjEXxuFNnDAP7Go0vqxKiMJEfwc-E",
  authDomain: "esp32-fire-project.firebaseapp.com",
  databaseURL: "https://esp32-fire-project-default-rtdb.firebaseio.com",
  projectId: "esp32-fire-project",
  storageBucket: "esp32-fire-project.firebasestorage.app",
  messagingSenderId: "723476629459",
  appId: "1:723476629459:web:38a7439b71bfe182249126"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export default database;