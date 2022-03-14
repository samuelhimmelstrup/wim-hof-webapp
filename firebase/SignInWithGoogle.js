import { GoogleAuthProvider } from "firebase/auth";
import { signInWithPopup } from "firebase/auth";
import { db, auth } from "./clientApp"
import { doc, getDoc } from 'firebase/firestore'
import { SaveUserToDb } from "./SaveUserToDb";

export const SignInWithGoogle = async () => {

    const provider = new GoogleAuthProvider();
    provider.addScope('profile');
    provider.addScope('email');
    const result = await signInWithPopup(auth, provider);
  
    // check if promise resolves + check if user exists. If yes and no --> saveUserToDb
    // maybe remove the 'uid' part??
    if (result.user.uid) {
      
      // This might be better, as it doesn't require db reads
      // if (result.user.metadata.lastSignInTime != null) {
      //   console.log("this might work");
      // }
  
      const userDocRef = doc(db, 'users', result.user.email);
      const docSnap = await getDoc(userDocRef);
  
      if (!docSnap.exists()) {
        SaveUserToDb(result.user);          
      }
    }
  }