import styles from './SessionModal.module.css'
import { motion } from 'framer-motion';

function SessionModal({data, onChildClick}) {

    const sessionData = Array.isArray(data) ? data : data.sessionData;
    const title = !Array.isArray(data) ? data.title : "Custom Session";
    
    // const { id, title, noOfRounds, level, sessionData } = data;
    
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

    return (
        <motion.div 
            className={styles.modalWrapper}
            whileHover={{scale: 1.1, transition: { duration: 0.4 }}}
            >
            
            <h1 className={styles.title}>{title}</h1>            
                {sessionData.map((roundData) => {
                    
                    const { round, breaths, breathPace, hold } = roundData;
                    const pace = 
                        breathPace == 'slow' ? 6 : 
                        breathPace == 'medium' ? 4 : 2
                    const minutes = Math.floor(hold / 60)
                    const seconds = hold % 60
                     
                    return (
                        <div key={round} className={styles.roundInfo}>
                            <div className={styles.singleInfoBox}>
                                <p># {round}</p>
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
                    whileHover={{scale: 1.1, transition: { duration: 0.4 }}}
                    whileTap={{ scale: 0.95 }}
                    onClick={onChildClick}
                >
                    LETS GO
                </motion.button>                
            </div>
    </motion.div> 
     );
}

export default SessionModal;