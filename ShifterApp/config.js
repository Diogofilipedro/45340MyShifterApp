import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = { 
    apiKey: "AIzaSyA7DtxJdLJzZIYoZsAWJaIp3JIue2l1DGg",
  authDomain: "test-4cabc.firebaseapp.com",
  projectId: "test-4cabc",
  storageBucket: "test-4cabc.appspot.com",
  messagingSenderId: "476601166259",
  appId: "1:476601166259:web:e2574fb5ae1e17418903c6",
  measurementId: "G-MP5GP6ZLG0"
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export { firebase };