import * as firebase from 'firebase';
const firebaseConfig = {
    apiKey: "AIzaSyDrqoV-c5jxpdnMjNfE6SzJKZwh42NHwSQ",
    authDomain: "school-2abf3.firebaseapp.com",
    databaseURL: "https://school-2abf3-default-rtdb.firebaseio.com",
    projectId: "school-2abf3",
    storageBucket: "school-2abf3.appspot.com",
    messagingSenderId: "1006582392496",
    appId: "1:1006582392496:web:4f85638dafc1db25fefd75"
  };
firebase.initializeApp(firebaseConfig);
export default firebase.database();
