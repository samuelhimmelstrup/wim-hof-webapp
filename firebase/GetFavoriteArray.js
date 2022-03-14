import { auth } from '../firebase/clientApp';
import { useAuthState } from 'react-firebase-hooks/auth';


// export const GetFavoriteArray = async() => {

//     const [user] = useAuthState(auth);

//     if (user == !null) {
//         const userDocRef = doc(db, 'users', user.email);
//         const docSnap = await getDoc(userDocRef);
//         return docSnap.data().favorites;
//     }
//     else { 
//         return [];
//     }
//   }