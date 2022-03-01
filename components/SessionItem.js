import styles from './SessionItem.module.css'
import { motion } from 'framer-motion';

function SessionItem({props, onChildClick}) {
    const { id, title, noOfRounds, level, sessionData } = props;
    

    return (
        <motion.div 
            className={
                level == 'Beginner' ? styles.itemWrapper1 : 
                level == 'Intermediate' ? styles.itemWrapper2 : styles.itemWrapper3}
            whileHover={{scale: 1.1, transition: { duration: 0.4 }}}
            whileTap={{ scale: 0.95 }}
            onClick={onChildClick}
            >
            
            <h1 className={styles.title}>{title}</h1>
            <p className={styles.roundsInfo}>{noOfRounds} rounds</p>
            <div className={styles.holdsInfo}>

                {sessionData.map(roundObj => {
                    const { hold } = roundObj
                    const min = Math.floor(hold / 60)
                    const sec = hold % 60

                    return (
                        <p className={styles.singleHoldInfo}>{min}:{sec < 10 ? `0${sec}` : sec}</p>
                    )
                })}
            </div>
        </motion.div>   
     );
}

export default SessionItem;