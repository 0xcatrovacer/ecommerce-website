import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAJUbAjTub0dHpksJdSj-jdUXS88ekOzBE",
  authDomain: "ecommerce-store-f7204.firebaseapp.com",
  projectId: "ecommerce-store-f7204",
  storageBucket: "ecommerce-store-f7204.appspot.com",
  messagingSenderId: "591967039260",
  appId: "1:591967039260:web:816a7bcf012810dd8794d9"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };