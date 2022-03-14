import { createContext, useState } from "react";
import { auth } from '../firebase/clientApp';
import { useAuthState } from 'react-firebase-hooks/auth';

export const Context = createContext([]);

export const FavContextProvider = ({ children }) => {

    const [user] = useAuthState(auth);
    const [favArray, setFavArray] = useState([]);

    const getFavArrayIfLoggedIn = () => {
        setTimeout(async() => {
            if (user == !null) {
                const userDocRef = doc(db, 'users', user.email);
                const docSnap = await getDoc(userDocRef);
                setFavArray(docSnap.data().favorites);
                console.log("hey det virker")
            }
            else {
                console.log("fuck")
                console.log(user)
            }       
        }, 3000);
    }

    getFavArrayIfLoggedIn();

    return (
        <Context.Provider
            value={favArray}    
        >
            {children}
        </Context.Provider>
    )
}

