import styles from './SessionItem.module.css'
import { motion } from 'framer-motion';
import FavoriteButton from './FavoriteButton';
import { useContext } from 'react'
import { Context } from '../firebase/FavoritesContext'

function SessionItem({props, onChildClick, onPromptLogin}) {
    const { id, title, level, sessionData } = props;
    const numberOfRounds = sessionData.length;

    const favoritesArray = useContext(Context);
    console.log(favoritesArray);

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
            <FavoriteButton 
                id={id} 
                onPromptLogin={onPromptLogin}
            />
            <p className={styles.roundsInfo}>{numberOfRounds} {numberOfRounds == 1 ? 'round' : 'rounds'}</p>
            <div className={styles.holdsInfo}>

                {sessionData.map(roundObj => {
                    const { hold, round } = roundObj
                    const min = Math.floor(hold / 60)
                    const sec = hold % 60

                    return (
                        <p 
                            className={styles.singleHoldInfo} 
                            key={round}
                        >
                            {min}:{sec < 10 ? `0${sec}` : sec}
                        </p>
                    )
                })}
            </div>
        </motion.div>   
     );
}

export default SessionItem;