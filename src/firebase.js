import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCVgCpGZf7DkblK55gy3KizwybLhMX5-7c",
  authDomain: "netflix-clone-aadil.firebaseapp.com",
  projectId: "netflix-clone-aadil",
  storageBucket: "netflix-clone-aadil.appspot.com",
  messagingSenderId: "261970490763",
  appId: "1:261970490763:web:b49f3d90ab69c30e896b8e"
};

// Use this to initialize the firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth } ;
export default db ;