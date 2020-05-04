import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

  // Your web app's Firebase configuration
  var config = {
    apiKey: "AIzaSyA7V_EcQDlyUPeI5w-Vlunu_zG2vBKkee8",
    authDomain: "pm-tool-49d3e.firebaseapp.com",
    databaseURL: "https://pm-tool-49d3e.firebaseio.com",
    projectId: "pm-tool-49d3e",
    storageBucket: "pm-tool-49d3e.appspot.com",
    messagingSenderId: "907289470239"
  };
  // Initialize Firebase
  firebase.initializeApp(config);
  firebase.firestore().settings({ timestampsInSnapshots: true });
  
  export default firebase  