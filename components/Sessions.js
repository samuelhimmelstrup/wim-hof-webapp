import styles from './Sessions.module.css';
import { useState} from "react";
import { motion } from 'framer-motion';
import Backdrop from '../layout/Backdrop'
import SessionModal from './SessionModal';
import SessionItem from './SessionItem';
import { SignInWithGoogle } from '../firebase/SignInWithGoogle';
import { DUMMY_SESSIONS } from '../api/fetchSessions';
import Layout from '../layout/Layout';


function Sessions( { onletsGoClick } ) {


    const [modalOpen, setModalOpen] = useState(false);
    const [showIndex, setShowIndex] = useState(0);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [promptLogin, setPromptLogin] = useState(false);
    
    const nextSessions = () => {
        setShowIndex(showIndex + 4);
    }

    const prevSessions = () => {
        setShowIndex(showIndex - 4);
    }

    const clickSessionHandler = (index) => {
        setCurrentIndex(index + showIndex);
        setModalOpen(true);
    }

    const letsGoHandler = () => {
        setModalOpen(false);
        onletsGoClick(DUMMY_SESSIONS[currentIndex]);
    }

    return (
        <div className={styles.wideDiv}>

            {/* Back Button */}
            <div className={styles.btnDiv}> 
                <motion.button
                    className={showIndex < 3 ? styles.hidden : styles.btnBack}
                    animate={{rotate:'0.5turn'}}
                    whileHover={{ scale: 1.1, transition: { duration: 0.4 } }}
                    whileTap={{ scale: 0.95 }}
                    onClick={prevSessions}
                />
            </div>

            <div className={styles.centerDiv}>
    
                {/* Showing 4 sessions at a time. Back/Forward controls index */}
                {DUMMY_SESSIONS
                .slice(showIndex, showIndex+4)
                .map((session, index) => { 

                    return (
                        <SessionItem 
                            key={session.id} 
                            props={session} 
                            onChildClick={() => clickSessionHandler(index)}
                            onPromptLogin={() => setPromptLogin(!promptLogin)}
                        />
                        )
                    })
                }
                
                {/* Show details of a session on click (like Netflix) */}
                {modalOpen && 
                    <Backdrop onClick={() => setModalOpen(!modalOpen)}>
                        <SessionModal 
                            data={DUMMY_SESSIONS[currentIndex]}
                            onChildClick={letsGoHandler}
                            />
                    </Backdrop>
                }

                {promptLogin && 
                    <Backdrop onClick={() => setPromptLogin(!promptLogin)}>
                        <Layout>
                            <p>Sign in to save as favorite</p>
                            <button
                                className={styles.signInBtn} 
                                onClick={SignInWithGoogle}>
                                Sign In
                            </button>
                        </Layout>
                    </Backdrop>
                }
            </div>
            
            {/* Forward Button */}
            <div className={styles.btnDiv}>            
                <motion.button
                    className={showIndex > DUMMY_SESSIONS.length - 5 ? styles.hidden : styles.btnForward} 
                    whileHover={{ scale: 1.1, transition: { duration: 0.4 } }}
                    whileTap={{ scale: 0.95 }}
                    onClick={nextSessions}
                />                
            </div>

        </div>
    )
}

export default Sessions;
