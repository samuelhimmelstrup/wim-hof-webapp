import styles from "./BreathingRound.module.css"
import { useState, useEffect } from "react"
import { motion, useMotionValue } from "framer-motion"
import CountDown from "./CountDown"

// REMOVE TITLE PROP FROM COUNTDOWN 
// HIDE THE BREATH TIMER, ONLY SHOW HOLD TIMER (AND THREE COUNT)

function BreathingRound(props) {

    const { round, breaths, hold, breathType, silentHold} = props.roundData;

    const breathLength = breathType == "slow" ? 6 
                         : breathType == "quick" ? 2 
                         : 4;
                         
    const [isBreathing, setIsBreathing] = useState(true);
    const [count, setCount] = useState(1);
    const [threeCount, setThreeCount] = useState(true);
    const [isPaused, setIsPaused] = useState(false);    

    const endOfBreaths = () => {
        setIsBreathing(false);
    }
    
    const endOfCountDown = () => {
        props.onEndOfHold();
        setIsBreathing(null);
    }

    const pauseRound = () => {
        if (isPaused) {
            setIsPaused(false)
        }
        if (!isPaused) {
            setIsPaused(true);
            console.log("PAUSE G") // TODO: console

        }        
    }

    const scaleOfBubble = useMotionValue(1);
    const colorOfBubble = useMotionValue("#982132");

    const bubbleVariants = {
        animationOne: {
            scale: [1, 3],
            backgroundColor: ["#982132" , "#202132"],
            transition: {
                duration: breathLength / 2,
                repeat: breaths + 1,
                repeatType: "reverse"
            }
        }, 
        animationPaused: {
            scale: scaleOfBubble.get(),
            backgroundColor: colorOfBubble.get(),
        },
        animationEnd: {
            scale: [1, 4],
            backgroundColor: ["#982132" , "#202132"],
            transition: {
                duration: hold / breaths, 
                easing: "easeInOut",
                repeat: Infinity,
                repeatType: "reverse"
            }
        },

    }

    // TODO: Only increases once??
    useEffect(() => {
        const interval = setInterval(() => {
          setCount(count + 1);
        }, breathLength*1000);
        return () => clearInterval(interval);
      }, []);

    // RETURNS
    if (threeCount) {
        return <CountDown time={3} onPaused={pauseRound} onComplete={() => setThreeCount(false)} />
    }

    if (!threeCount) {
        return (        

        <div className={styles.container}>
            <h1 className={styles.title}>Round: {round}</h1> 

            <div className={styles.breathBubbleContainer}>
                <motion.div className={styles.breathBubble}
                variants={bubbleVariants}
                style={{scale:scaleOfBubble, backgroundColor:colorOfBubble}}
                animate={isBreathing && !isPaused ? "animationOne" : isPaused ? "animationPaused" : "animationEnd"}
                >
                <p className={styles.counter}>{isBreathing ? count : "Hold that breath"}</p>
                </motion.div>
            </div>

            {!isBreathing && 
                <div className={styles.breathHoldContainer}>
                    <CountDown time={hold} title="Breathhold timer" onComplete={endOfCountDown} onPaused={pauseRound} />
                </div>}

            <div className={styles.hidden}>
                <CountDown time={breaths*breathLength} title="Breath timer (hidden)" onComplete={endOfBreaths} onPaused={pauseRound} />
            </div>

        </div>
        );
    }
}

export default BreathingRound;


// LYDRELATERET
// import useSound from "use-sound"
// import breathSound from "../public/sighBreath.mp3"

// const [play] = useSound(breathSound);
// <button onClick={play}>play sound</button> 