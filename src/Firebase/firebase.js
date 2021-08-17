import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyAmy5bvMY-Vkmfp9Uc_rYMtqFCrzpF6bGk",
  authDomain: "stackathon-947b3.firebaseapp.com",
  projectId: "stackathon-947b3",
  storageBucket: "stackathon-947b3.appspot.com",
  messagingSenderId: "279486456137",
  appId: "1:279486456137:web:127621ed93180eaffdba98",
  measurementId: "G-TWXTVFBD1R"
};
const fireBase = firebase.initializeApp(firebaseConfig);
export default fireBase;