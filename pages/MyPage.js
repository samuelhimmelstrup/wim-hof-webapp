import styles from '../styles/MyPage.module.css'
import Wrapper from '../layout/Wrapper'
import { DUMMY_SESSIONS } from '../api/fetchSessions'
import { Context } from '../firebase/FavoritesContext'
import { useContext, useEffect, useState } from 'react'
import SessionItemSmall from '../components/SessionItemSmall'
import BreathingSession from '../components/BreathingSession'

function MyPage() {

    useEffect(() => {
        // get diaryEntries
    }, [])

    const context = useContext(Context);
    const { user, favArray } = context;

    const [currentSession, setCurrentSession] = useState({});
    const [startSession, setStartSession] = useState(false);

    const clickSessionHandler = (id) => {
        setCurrentSession(DUMMY_SESSIONS[id])
        setStartSession(true);
    }

    return ( 
        <Wrapper>

        {startSession && 
            <>
                <button 
                    className={styles.backBtn} 
                    onClick={() => setStartSession(false)}>
                    Back
                </button>
                <BreathingSession data={currentSession} />
            </>
        }

        {!startSession && 
            
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
                                    onChildClick={() => clickSessionHandler(session.id)}
                                />
                            )
                        }
                    })
                    }
                    </div>
                </div>
            </div>
        }
        </Wrapper>
    
    );
}

export default MyPage;