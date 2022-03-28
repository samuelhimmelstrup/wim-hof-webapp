import styles from '../styles/MyPage.module.css'
import Wrapper from '../layout/Wrapper'
import { DUMMY_SESSIONS } from '../api/fetchSessions'
import { Context } from '../firebase/FavoritesContext'
import { useContext, useEffect, useState } from 'react'
import SessionItem from '../components/SessionItem'
import BreathingSession from '../components/BreathingSession'
import { motion } from 'framer-motion'

function MyPage() {

    useEffect(() => {
        // get diaryEntries
    }, [])

    const context = useContext(Context);
    const { user, favArray } = context;

    const [openFav, setOpenFav] = useState(false);
    const [showIndex, setShowIndex] = useState(0);
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

                <div className={styles.whatToShowButtonsDiv}>
                    <button 
                        className={styles.openFavBtn}
                        onClick={() => setOpenFav(!openFav)}
                    >Favorites</button>  
                </div>
                

                <div className={styles.contentContainer}>
                    <div className={styles.diaryContainer}>
                        <h3>BreathDiary (Breathary?) Entries</h3>

                    {/* Fetch from collection under user with entries made after sessions */}
                    </div>


                    
                    <motion.div 
                        className={styles.favContainer}
                        animate={openFav ? { height: '100%' } : { height: '10%' }}
                        transition={{ duration: 1 }}
                    >
                        <div className={styles.backBtnDiv}> 
                            <motion.button
                                className={showIndex < 3 ? styles.hidden : styles.btnBack}
                                animate={{rotate:'0.5turn'}}
                                whileHover={{ scale: 1.1, transition: { duration: 0.4 } }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => setShowIndex(showIndex - 4)}
                            />
                        </div>

                    {DUMMY_SESSIONS
                    .slice(showIndex, showIndex+4)
                    .map(session => {
                        if (favArray.includes(session.id)) {
                            return (
                                <SessionItem
                                    key={session.id} 
                                    props={session} 
                                    onChildClick={() => clickSessionHandler(session.id)}
                                />
                            )
                        }
                    })
                    }

                        <div className={styles.forwardBtnDiv}>            
                            <motion.button
                                className={showIndex > favArray.length - 5 ? styles.hidden : styles.btnForward} 
                                whileHover={{ scale: 1.1, transition: { duration: 0.4 } }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => setShowIndex(showIndex + 4)}
                            />                
                        </div>                    
                    </motion.div>
                </div>
            </div>
        }
        </Wrapper>
    
    );
}

export default MyPage;