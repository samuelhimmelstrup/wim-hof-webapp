import styles from "./BreathingSession.module.css"
import { useState } from "react"
import { motion } from "framer-motion"
import CountDown from "./CountDown"


function BreathingSession(props) {

    const sessionData = {
        rounds: 3, 
        breaths: 2,
        holds: 30
    }

    const { rounds, breaths, holds } = sessionData

    const [isBreathing, setIsBreathing] = useState(true);

    const endOfBreaths = () => {
        console.log("SLUT PÅ VEJRTRÆKNING")
        setIsBreathing(false)
    }


    const endOfCountDown = () => {
        console.log("TID TIL NÆSTE RUNDE")
    }

    const bubbleVariants = {
        animationOne: {
            scale: [1, 3],
            backgroundColor: "#982132e1",
            transition: {
                duration: 2,
                yoyo: breaths // PRØV MED REPEAT
            }
        }
    }

    return (        

        <div className={styles.container}>

            <h1 className={styles.title}>HER ER DIN SESSION</h1> 
            <div className={styles.breathBubbleContainer}>
                <motion.div className={styles.breathBubble}
                variants={bubbleVariants}
                animate="animationOne" 
                >
                <p className={styles.counter}>TÆLLER HER</p>
                </motion.div>
            </div>

            <div className={styles.hidden}>
                <CountDown time={breaths*2} onComplete={endOfBreaths} />
            </div>


            {!isBreathing && <CountDown time={holds} onComplete={endOfCountDown} />}

        </div>
     );
}

export default BreathingSession;


// LYDRELATERET
// import useSound from "use-sound"
// import breathSound from "../public/sighBreath.mp3"

// const [play] = useSound(breathSound);
// <button onClick={play}>play sound</button> 