import styles from '../styles/MyPage.module.css'
import Wrapper from '../layout/Wrapper'
import { DUMMY_SESSIONS } from '../api/fetchSessions'
import { Context } from '../firebase/FavoritesContext'
import { useContext } from 'react'

function MyPage() {

    const context = useContext(Context);
    const { user, favArray } = context;

    return ( 
        <Wrapper>
        <div className={styles.container}>
            <h1>My Personal Page</h1>

            <h3>BreathDiary (Breathary?) Entries</h3>

            {/* Fetch from collection under user with entries made after sessions */}

            <p>Favorites</p>

            {DUMMY_SESSIONS.map(session => {
                if (favArray.includes(session.id)) {
                    return (
                        <div>{session.title} + {session.id}</div>
                        
                    )
                }
            })

            }
        </div>
        </Wrapper>
    
    );
}

export default MyPage;