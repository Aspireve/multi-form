import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage, ref  } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBqRGAz-PbS4WrKpR1qWDEkWR1FHpt07b8",
  authDomain: "multi-form-222fa.firebaseapp.com",
  projectId: "multi-form-222fa",
  storageBucket: "multi-form-222fa.appspot.com",
  messagingSenderId: "407443707547",
  appId: "1:407443707547:web:bcf521c4a6f0633f99583e",
  measurementId: "G-HH21H6KS84"
};

export const app = initializeApp(firebaseConfig);
export const storage = getStorage();
export const storageRef = ref(storage);
// const analytics = getAnalytics(app);