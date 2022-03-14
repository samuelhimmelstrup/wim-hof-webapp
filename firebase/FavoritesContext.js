import { createContext, useState } from "react";
import { auth } from '../firebase/clientApp';
import { useAuthState } from 'react-firebase-hooks/auth';

export const Context = createContext([]);

export const FavContextProvider = ({ children }) => {

    const [user] = useAuthState(auth);
    const [favArray, setFavArray] = useState([]);

    // const getFavArrayIfLoggedIn = async(user) => {
    //         if (user == !null) {
    //             const userDocRef = doc(db, 'users', user.email);
    //             const docSnap = await getDoc(userDocRef);
    //             console.log("hey det virker")

    //             setFavArray(docSnap.data().favorites);
    //         }
    //         else {
    //             console.log("fuck")
    //         };
    // }

    // getFavArrayIfLoggedIn(user);
    // console.log("favARr: " + favArray);
    // console.log(user);

    return (
        <Context.Provider
            value={favArray}    
        >
            {children}
        </Context.Provider>
    )
}

