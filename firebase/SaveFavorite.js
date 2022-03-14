import { db } from "./clientApp";
import { 
    doc, 
    getDoc, 
    updateDoc, 
    arrayUnion,
    arrayRemove,
  } from "firebase/firestore"; 

export const SaveFavorite = async(user, sessionId) => {
    const userDocRef = doc(db, 'users', user.email);
    const docSnap = await getDoc(userDocRef);
    
    if (docSnap.exists()) {
      if (!docSnap.data().favorites.includes(sessionId)) {
        await updateDoc(userDocRef, 
          { favorites: arrayUnion(sessionId) });
      }
      else {
        await updateDoc(userDocRef, 
          { favorites: arrayRemove(sessionId) });
      }
    }  
  }