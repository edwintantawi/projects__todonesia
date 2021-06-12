import firebase from 'firebase/app';
import firebaseConfig from './config';
import 'firebase/auth';
import 'firebase/firestore';

firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
export const db = firebase.firestore();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
export const facebookAuthProvider = new firebase.auth.FacebookAuthProvider();
export default firebase;
