import styles from '../styles/MyPage.module.css'
import Wrapper from '../layout/Wrapper'
import { DUMMY_SESSIONS } from '../api/fetchSessions'
import { Context } from '../firebase/FavoritesContext'
import { useContext, useEffect } from 'react'
import SessionItemSmall from '../components/SessionItemSmall'

function MyPage() {

    useEffect(() => {
        // get diaryEntries
    }, [])

    const context = useContext(Context);
    const { user, favArray } = context;

    const clickSessionHandler = (id) => {
        // Make session start
    }

    return ( 
        <Wrapper>
        <div className={styles.container}>
            <h1 className={styles.title}>My Personal Page</h1>

            <div className={styles.contentContainer}>
                <div className={styles.diaryContainer}>
                    <h3>BreathDiary (Breathary?) Entries</h3>

                {/* Fetch from collection under user with entries made after sessions */}
                </div>

                <div className={styles.favContainer}>
                <h2>Favorites</h2>

                {DUMMY_SESSIONS.map(session => {
                    if (favArray.includes(session.id)) {
                        return (
                            <SessionItemSmall 
                                key={session.id} 
                                props={session} 
                                onChildClick={() => clickSessionHandler(id)}
                            />
                        )
                    }
                })
                }
                </div>
            </div>
        </div>
        </Wrapper>
    
    );
}

export default MyPage;