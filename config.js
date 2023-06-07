import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyA-KKC5pYt0dRuIecPyWJ--Lo0VTuCgvgQ",
    authDomain: "my-app-b9ee8.firebaseapp.com",
    projectId: "my-app-b9ee8",
    storageBucket: "my-app-b9ee8.appspot.com",
    messagingSenderId: "1007685976136",
    appId: "1:1007685976136:web:0088b116df1ff1b517987d",
    measurementId: "G-3DVF8TQGYM"
  };

  if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
  }

  export{firebase};