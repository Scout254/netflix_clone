import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyDM-oOkcqQWdclQ34hyVqshXBpH7xbdLsM",
    authDomain: "netflix-clone-4d8b7.firebaseapp.com",
    projectId: "netflix-clone-4d8b7",
    storageBucket: "netflix-clone-4d8b7.appspot.com",
    messagingSenderId: "370453537338",
    appId: "1:370453537338:web:f2aab9e774bf47a1598b03"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();
  
export {auth};
export default db;