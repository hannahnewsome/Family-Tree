
// firebase import
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth';
console.log(process.env);
const firebaseConfig = {
  apiKey: process.env.VUE_APP_APIKEY,
  authDomain: process.env.VUE_APP_AUTHDOMAIN,
  projectId: process.env.VUE_APP_PROJECTID,
  storageBucket: process.env.VUE_APP_STORAGEBUCKET,
  messagingSenderId: process.env.VUE_APP_MESSAGINGSENDERID,
  appId: process.env.VUE_APP_APPID,
  measurementId: process.env.VUE_APP_MEASUREMENTID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(fireApp);

//initialize firebase auth
const auth = getAuth();

export {app, auth}