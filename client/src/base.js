import Rebase from 're-base';
import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyBNkRyyJymQByfkGfqUqy6IUFrXns8mRlU",
    authDomain: "face-in-foto.firebaseapp.com",
    databaseURL: "https://face-in-foto.firebaseio.com",
    projectId: "face-in-foto",
    storageBucket: "face-in-foto.appspot.com",
    messagingSenderId: "457317509112"
  };

  const app = firebase.initializeApp(config);
  const base = Rebase.createClass(app.database());

export { app, base };