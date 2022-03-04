import styles from './Sessions.module.css';
import { useState, useEffect } from "react";
import { motion } from 'framer-motion';
import Backdrop from '../layout/Backdrop'
import SessionItem from './SessionItem';
import SessionModal from './SessionModal';
import { DUMMY_SESSIONS } from '../api/fetchSessions';

function Sessions({letsGoClick}) {

    const [modalOpen, setModalOpen] = useState(false);
    const [showIndex, setShowIndex] = useState(0);
    const [currentIndex, setCurrentIndex] = useState(0);
    
    const nextSessions = () => {
        setShowIndex(showIndex + 4);
    }

    const prevSessions = () => {
        setShowIndex(showIndex - 4);
    }

    // TODO: Make render 2 not 4 when screen is small
    // const noOfSessions = (window.innerWidth > 600) ? 4 : 2

    const hoverHandler = () => {
        setModalOpen(!modalOpen);
    }

    const letsGoHandler = () => {
        setModalOpen(false);
        letsGoClick(DUMMY_SESSIONS[currentIndex]);
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
                            onChildClick={() => {
                                setCurrentIndex(index);
                                hoverHandler();
                            }}
                        />
                        )
                    })
                }
                
                {/* Show details of a session on click (like Netflix) */}
                {modalOpen && 
                <Backdrop onClick={hoverHandler}>
                    <SessionModal 
                        props={DUMMY_SESSIONS[currentIndex]}
                        letsGoClick={letsGoHandler}
                        />
                </Backdrop>}
            </div>
            
            {/* Forward Button */}
            <div className={styles.btnDiv}>            
            <motion.button
                    className={showIndex > DUMMY_SESSIONS.length - 5 ? styles.hidden : styles.btn} 
                    whileHover={{ scale: 1.1, transition: { duration: 0.4 } }}
                    whileTap={{ scale: 0.95 }}
                    onClick={nextSessions}
                />                
            </div>
        </div>
    )
}

export default Sessions;
