import firebase from "firebase";

//initialize your database
  const firebaseConfig = {
  apiKey: "AIzaSyAObrWWcZqBpEJP7O8zWhhETEVEggw_IIY",
  authDomain: "school-attendence-a5989.firebaseapp.com",
  databaseURL: "https://school-attendence-a5989-default-rtdb.firebaseio.com",
  projectId: "school-attendence-a5989",
  storageBucket: "school-attendence-a5989.appspot.com",
  messagingSenderId: "191074149296",
  appId: "1:191074149296:web:61dc31c1872166d226ec75"
};
if(!firebase.apps.length){ firebase.initializeApp(firebaseConfig); }
  export default firebase.database()

 

  