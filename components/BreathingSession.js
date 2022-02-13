import styles from "./BreathingSession.module.css"
import { useState } from "react"
import { motion } from "framer-motion"
import CountDown from "./CountDown"


function BreathingSession(props) {

    const sessionData = {
        rounds: 3, 
        breaths: 20,
        holds: 30
    }

    const { rounds, breaths, holds } = sessionData

    const [count, setCount] = useState(0);

    const incrementCounter = () => {
        count < breaths ? setCount(count + 1) : clearInterval()
    }

    // const go = () => setInterval(incrementCounter, 1500)

    const countDownHandler = () => {
        console.log("YAAAY")
    }

    return (        

        <div className={styles.container}>

            <h1 className={styles.title}>HER ER DIN SESSION</h1> 
            <div className={styles.breathBubbleContainer}>
                <motion.div className={styles.breathBubble}
                initial={{ scale: 1 }}
                animate={{ scale: [1, 3], backgroundColor: "#982132e1" }} 
                transition={{ duration: 1.5, yoyo: breaths }}
                >
                <p>{count}</p>
                </motion.div>
            </div>

            {/* <CountDown time={holds}/> */}
            <CountDown time={10} onComplete={countDownHandler} />

        </div>
     );
}

export default BreathingSession;


// LYDRELATERET
// import useSound from "use-sound"
// import breathSound from "../public/sighBreath.mp3"

// const [play] = useSound(breathSound);
// <button onClick={play}>play sound</button> 