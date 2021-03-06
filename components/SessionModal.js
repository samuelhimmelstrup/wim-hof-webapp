import styles from './SessionModal.module.css'
import { motion } from 'framer-motion';
import { BreathPaceValues } from '../api/fetchSessions'

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

                {sessionData.map((roundObj, index) => {
                    
                    const { cycles, breaths, breathPace, hold } = roundObj;
                    const pace = 
                        breathPace == 'slow' ? slow : 
                        breathPace == 'medium' ? medium : quick
                    const minutes = Math.floor(hold / 60)
                    const seconds = hold % 60
                    
                    return (
                    <div key={index} className={styles.roundInfo}>

                    <div className={styles.roundNumber}>
                        <p>Round {index + 1}</p>
                    </div>    

                    {roundObj.type == 'Wim Hof' && 
                        <>
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

                        </>                   
                    }

                    {roundObj.type == 'Box' && 
                        <>    
                            <div className={styles.boxInfo}>
                                    <p className={styles.cycles}>
                                        {cycles} x 
                                    </p>          

                                    <div className={styles.box} />                      
                                
                                <p className={styles.cyclePace}>Pace: {breathPace}</p>

                            </div>

                        </>                      
                    }    

                </div> 
                )               
                     
            })}
                        
            <motion.button
                className={styles.btn} 
                whileHover={{scale: 1.05, transition: { duration: 0.4 }}}
                whileTap={{ scale: 0.95 }}
                onClick={onChildClick}
            >
                Lets Go
            </motion.button>                
    </motion.div> 
     );
}

export default SessionModal;