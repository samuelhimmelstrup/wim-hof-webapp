import styles from './SessionModal.module.css'
import { motion } from 'framer-motion';
import { BreathPaceValues } from '../api/fetchSessions'

function SessionModal({data, onChildClick}) {

    const sessionData = Array.isArray(data) ? data : data.sessionData;
    const title = !Array.isArray(data) ? data.title : "Custom Session";
        
    // Handles enter = go || CANT GET IT TO WORK
    // useEffect(() => {

    //     function handleKeyPress(e) {
    //         if (e.key === "Enter") {
    //         props.letsGoClick;
    //         }}

    //     window.addEventListener("keydown", handleKeyPress);
    
    //     return () => {
    //         window.removeEventListener("keydown", handleKeyPress);
    //     };
    //     }, [])

    const { slow, medium, quick } = BreathPaceValues;

    return (
        <motion.div 
            className={styles.modalWrapper}
            whileHover={{scale: 1.02, transition: { duration: 0.4 }}}
            >
            
            <h1 className={styles.title}>{title}</h1>            
                {sessionData.map((roundData, index) => {
                    
                    const { round, breaths, breathPace, hold } = roundData;
                    const pace = 
                        breathPace == 'slow' ? slow : 
                        breathPace == 'medium' ? medium : quick
                    const minutes = Math.floor(hold / 60)
                    const seconds = hold % 60
                     
                    return (
                        <div key={index} className={styles.roundInfo}>
                            <div className={styles.singleInfoBox}>
                                <p>Round {index + 1}</p>
                            </div>     

                            <div className={styles.breathAndPaceInfo}>
                                <p className={styles.breaths}>{breaths} x</p>
                                <motion.div 
                                    className={styles.lungs}
                                    animate={{ scale: [0.6, 1] }}
                                    transition={{
                                        repeat: Infinity,
                                        repeatType: 'reverse',
                                        duration: pace / 2,
                                    }} 
                                     />
                            </div>

                            <div className={styles.holdInfo}>
                                <p>Hold: {minutes}:{seconds < 10 ? `0${seconds}` : seconds}</p>
                            </div>
                            
                        </div>
            
                    )
                })}
            
            
            <div className={styles.btnDiv}>            
                <motion.button
                    className={styles.btn} 
                    whileHover={{scale: 1.05, transition: { duration: 0.4 }}}
                    whileTap={{ scale: 0.95 }}
                    onClick={onChildClick}
                >
                    Lets Go
                </motion.button>                
            </div>
    </motion.div> 
     );
}

export default SessionModal;