import styles from "./BreathingSession.module.css"
import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import CountDown from "./CountDown"


function BreathingSession(props) {

    const sessionData = {
        rounds: 3, 
        breaths: 30,
        breathType: "quick", // ("quick", "normal") 
        holds: 8,
        silentHolds: false, // TODO: implement silentHolds option (& sound in general)
    }

    const { rounds, breaths, holds, breathType, silentHolds} = sessionData;

    const breathLength = breathType == "slow" ? 6 
                         : breathType == "quick" ? 2 
                         : 4;

    const [isBreathing, setIsBreathing] = useState(true);
    const [count, setCount] = useState(1);

    const endOfBreaths = () => {
        console.log("SLUT PÅ VEJRTRÆKNING");
        setIsBreathing(false);
    }
    const endOfCountDown = () => {
        setIsBreathing(true);
        console.log("TID TIL NÆSTE RUNDE");
    }

    const bubbleVariants = {
        animationOne: {
            scale: [1, 3],
            backgroundColor: "#982132",
            transition: {
                duration: breathLength / 2,
                repeat: breaths + 1,
                repeatType: "reverse"
            }
        }, 
        animationEnd: {
            scale: [1, 6],
            backgroundColor: ["#982132" , "#202132"],
            transition: {
                duration: 4, 
                easing: "easeInOut",
                repeat: Infinity,
                repeatType: "reverse"
            }
        }
    }

    // INCREASES COUNTER EVERY 4 SECONDS (every breath)
    // TODO: Only increases once??
    useEffect(() => {
        const interval = setInterval(() => {
          setCount(count + 1);
        }, breathLength*1000);
        return () => clearInterval(interval);
      }, []);

    return (        

        <div className={styles.container}>

            <h1 className={styles.title}>HER ER DIN SESSION</h1> 
            <div className={styles.breathBubbleContainer}>
                <motion.div className={styles.breathBubble}
                variants={bubbleVariants}
                animate={isBreathing? "animationOne" : "animationEnd"}
                >
                <p className={styles.counter}>{isBreathing ? count : "Hold breath"}</p>
                </motion.div>
            </div>

            <div className={styles.hidden}>
                <CountDown time={breaths*breathLength} onComplete={endOfBreaths} />
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