import styles from './SessionItem.module.css'
import { motion } from 'framer-motion';
import FavoriteButton from './FavoriteButton';


function SessionItem({props, onChildClick, onPromptLogin}) {
    const { sessionType, id, title, level, sessionData } = props;
    const numberOfRounds = sessionData.length;


    return (
        <motion.div 
            className={
                level == 'beginner' ? styles.itemWrapper1 : 
                level == 'intermediate' ? styles.itemWrapper2 : styles.itemWrapper3}
            whileHover={{scale: 1.05, transition: { duration: 0.4 }}}
            whileTap={{ scale: 0.95 }}
            onClick={onChildClick}
        >
            
            <h1 className={styles.title}>{title}</h1>
            <div className={styles.line}/>
            <FavoriteButton 
                id={id} 
                onPromptLogin={onPromptLogin}
            />
            <p className={styles.roundsInfo}>
                {numberOfRounds} {numberOfRounds == 1 ? 'round' : 'rounds'}
            </p>
            <div className={styles.holdsInfo}>
                {sessionData.map((roundObj, index) => {
                    const { hold, cycles, type } = roundObj
                    const min = Math.floor(hold / 60)
                    const sec = hold % 60
                    if (type == 'Wim Hof') { 
                        return (
                            <>
                            <p className={styles.singleHoldInfo} key={index}>
                                {min}:{sec < 10 ? `0${sec}` : sec}
                            </p>
                            
                            </>
                        )
                    }
                    else if (type == 'Box') {
                        return (
                            <>
                                <p className={styles.singleBoxInfo} key={index}>
                                    {cycles}
                                </p>
                                
                            </>
                        )
                    }

                })}
            </div>
            
            {sessionType == 'Wim Hof' &&
                <div className={styles.lungs} />
            }
            {sessionType == 'Box' &&
                <div className={styles.box} />
            }
            {sessionType == 'Mix' &&
                <div className={styles.mix} />
            }

        </motion.div>   
     );
}

export default SessionItem;