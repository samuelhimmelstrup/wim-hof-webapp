import { db } from "./clientApp"
import { collection, doc, setDoc } from 'firebase/firestore'

export const SaveUserToDb = async(user) => {
    const usersRef = collection(db, "users");
  
    await setDoc(doc(usersRef, user.email), {
      name: user.displayName,
      email: user.email,
      id: user.uid,
      favorites: []
    });
  }