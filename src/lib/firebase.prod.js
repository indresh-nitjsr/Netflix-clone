import Firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
// import { config } from 'eslint-plugin-prettier'


//we need to somehow seed the database

// we need to config here
const config = {
  apiKey: 'AIzaSyAemWEKZAiQghK1JFkuQLTCsvwEZcyfJb0',
  authDomain: 'netflix-a8227.firebaseapp.com',
  projectId: 'netflix-a8227',
  storageBucket: 'netflix-a8227.appspot.com',
  messagingSenderId: '353965376739',
  appId: '1:353965376739:web:bd9a5872a14debd560f1d6',
  measurementId: 'G-XNDCX2TLKF',
};

const firebase = Firebase.initializeApp(config)

export { firebase };
