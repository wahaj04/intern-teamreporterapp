import { initializeApp } from 'firebase/app';
import { getAuth } from '@firebase/auth';
const firebaseConfig = {
  apiKey: "AIzaSyChQC1fuTPpiLxq4OI_fTd0hXkrHagqRTE",
  authDomain: "intern-team.firebaseapp.com",
  projectId: "intern-team",
  storageBucket: "intern-team.appspot.com",
  messagingSenderId: "369547159137",
  appId: "1:369547159137:web:3d2633164e523010aaac20",
  measurementId: "G-JHWS9P8G27"
};
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)


