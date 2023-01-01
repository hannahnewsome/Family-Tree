import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// firebase import
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: process.env.apiKey,
  authDomain: process.env.authDomain,
  projectId: process.env.projectId,
  storageBucket: process.env.storageBucket,
  messagingSenderId: process.env.messagingSenderId,
  appId: process.env.appId,
  measurementId: process.env.measurementId
};

// Initialize Firebase
const fireApp = initializeApp(firebaseConfig);
const analytics = getAnalytics(fireApp);

//initialize firebase auth
const auth = getAuth();

export {fireApp, auth}

createApp(App).use(store).use(router).mount('#app')
