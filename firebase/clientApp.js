import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from 'firebase/auth'
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    storageBucket: process.env.NEXT_PUBLIC_STORAGE_BUCKET,
    messagingSenderId: process.env.NEXT_PUBLIC_MESSAGING_SENDER_ID,
    appId: process.env.NEXT_PUBLIC_APP_ID,
    measurementId: process.env.NEXT_PUBLIC_MEASUREMENT_ID
  }
   
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);

// export const analytics = getAnalytics(app);

// import { GoogleAuthProvider } from "firebase/auth";
// import { signInWithPopup } from "firebase/auth";

// const signInWithGoogle = async () => {
//   const provider = new GoogleAuthProvider();
//   provider.addScope('profile');
//   provider.addScope('email');
//   const result = await signInWithPopup(auth, provider);
// }

// brug den der firebase hook der returnerer "user"
// {user ? <button onClick={() => auth.signOut()}>Sign Out</button> : <button onClick={signInWithGoogle}>Sign In With Google</button>}