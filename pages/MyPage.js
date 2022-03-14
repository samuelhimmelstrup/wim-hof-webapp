import styles from '../styles/MyPage.module.css'
import Wrapper from '../layout/Wrapper'
import { doc, getDoc } from 'firebase/firestore'
import { db } from '../firebase/clientApp'
import { auth } from '../firebase/clientApp';
import { useAuthState } from 'react-firebase-hooks/auth';
import { DUMMY_SESSIONS } from '../api/fetchSessions'

function MyPage() {

    const [user] = useAuthState(auth);
    
    const getFav = async() => {
        const userDocRef = doc(db, 'users', user.email);
        const docSnap = await getDoc(userDocRef);
        return docSnap.data().favorites;
    }

    console.log(getFav());
    // const favArray = getFav(user);


    return ( 
        <Wrapper>
            <h1>My Personal Page</h1>
            <p>Favorites</p>


            {/* {DUMMY_SESSIONS.map(session => {
                if (favArray.includes(session.id)) {
                    return (
                        <div>{session.title}</div>
                    )
                }
            })

            } */}

        </Wrapper>
    
    );
}

export default MyPage;