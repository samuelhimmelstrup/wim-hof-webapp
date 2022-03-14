import { createContext, useEffect, useState } from "react";
import { auth, db } from '../firebase/clientApp';
import { useAuthState } from 'react-firebase-hooks/auth';
import { doc, getDoc } from 'firebase/firestore'

export const Context = createContext([]);

export const FavContextProvider = ({ children }) => {

    const [user] = useAuthState(auth);
    const [favArray, setFavArray] = useState([]);
    console.log(user);

    const getFavArrayIfLoggedIn = async() => {
        if (user !== null) {
            const userDocRef = doc(db, 'users', user.email);
            const docSnap = await getDoc(userDocRef);

            console.log("hey det virker")

            setFavArray(docSnap.data().favorites);
        }
        else {
            console.log("fuck")
        };
    }
    useEffect(() => {
        getFavArrayIfLoggedIn();
    }, [user])
    

    return (
        <Context.Provider
            value={{
            user,
            favArray,          
            }}    
        >
            {children}
        </Context.Provider>
    )
}

