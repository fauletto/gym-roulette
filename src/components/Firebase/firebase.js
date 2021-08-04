import app from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

const config = {
  apiKey: "AIzaSyD6jxeaXLfgtcf07jwY6ydeCjnnNitvg-A",
  authDomain: "gym-roulette.firebaseapp.com",
  projectId: "gym-roulette",
  storageBucket: "gym-roulette.appspot.com",
  messagingSenderId: "606338490203",
  appId: "1:606338490203:web:fa04230514472f933c047e",
  measurementId: "G-WZ3JYMFCDM"
};

class Firebase{
  constructor(){
    app.initializeApp(config);
    this.auth = app.auth();
    //this.db = app.database();
  }

  /*** Authentication ***/ 

  doCreateUserWithEmailAndPassword = (email, password) =>
    this.auth.createUserWithEmailAndPassword(email, password);

  doSignInWithEmailAndPassword = (email, password) =>
    this.auth.signInWithEmailAndPassword(email, password);

  doSignOut = () =>
    this.auth.signOut();

  doPasswordReset = email => 
    this.auth.sendPasswordResetEmail(email);

}

export default Firebase;

