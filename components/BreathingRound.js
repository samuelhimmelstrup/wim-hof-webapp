import styles from "./BreathingRound.module.css"
import { useState, useEffect } from "react"
import { motion, useMotionValue } from "framer-motion"
import CountDown from "./CountDown"

function BreathingRound(props) {

    const { round, breaths, hold, breathPace, silentHold} = props.roundData;

    const breathLength = breathPace == "slow" ? 6 
                         : breathPace == "quick" ? 2 
                         : 4;
                         
    // Stages: 1 = 3 Count, 2 = Breathing, 3 = Breathhold, 4 = 15 Count
    const [stage, setStage] = useState(1);
    const [count, setCount] = useState(0);
    const [isBreathing, setIsBreathing] = useState(true);
    const [threeCount, setThreeCount] = useState(true);
    const [isPaused, setIsPaused] = useState(false); 
    
    
    // ADD 15 COUNT AT END OF ROUND

    const endOfBreaths = () => {
        setIsBreathing(false);
        // setStage(3);
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
        }        
    }

    const scaleOfBubble = useMotionValue(1);
    const colorOfBubble = useMotionValue("#982132");

    const color1 = "#a8e2ca"
    const color2 = "#58a685"
    
    const bubbleVariants = {
        animationOne: {
            scale: [1, 3],
            backgroundColor: [color1 , color2],
            transition: {
                duration: breathLength / 2,
                easing: "easeInOut",
                repeat: breaths * 2,
                repeatType: "reverse"
            }
        }, 
        animationPaused: {
            scale: [scaleOfBubble.get(), 1],
            backgroundColor: colorOfBubble.get(),
            transition: {
                duration: 0.6,
                easing: "easeOut",
            }
        },
        animationEnd: {
            scale: [1, 4, 3, 4, 3, 4, 3, 4],
            backgroundColor: [color1 , color2],
            transition: {
                duration: hold, 
                easing: "easeInOut",
                repeat: Infinity,
                repeatType: "reverse"
            }
        },
    }

    // RETURNS
    if (threeCount) {
        return (
            <CountDown time={3} onPaused={pauseRound} onComplete={() => setThreeCount(false)} />
        )
    }

    if (!threeCount) {
        return (        

        <div className={styles.container}>
            <h1 className={styles.title}>Round: {round}</h1> 

            <div className={styles.breathBubbleContainer}>
                <motion.div className={styles.breathBubble}
                variants={bubbleVariants}
                style={{scale:scaleOfBubble, backgroundColor:colorOfBubble}}
                animate={isBreathing && !isPaused ? "animationOne" 
                                        : isPaused ? "animationPaused" 
                                        : "animationEnd"}
                >
                <p className={styles.counter}>{isBreathing ? count : "Hold that breath"}</p>
                </motion.div>
            </div>

            {!isBreathing && 
                <div className={styles.breathHoldContainer}>
                    <CountDown 
                        time={hold} 
                        title="Breathhold timer" 
                        onComplete={endOfCountDown} 
                        onPaused={pauseRound} 
                    />
                </div>}

            <div className={styles.hidden}>
                <CountDown 
                    time={breaths*breathLength}
                    onEachBreath={() => setCount(count + 1)} 
                    title="Breath timer (hidden)"
                    breathLength={breathLength} 
                    onComplete={endOfBreaths} 
                    onPaused={pauseRound} 
                />
            </div>

            {isPaused && <div>PAUSED</div>}

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