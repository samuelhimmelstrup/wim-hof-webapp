import styles from "./BreathingRound.module.css"
import { useState, useEffect } from "react"
import { motion, useMotionValue } from "framer-motion"
import CountDown from "./CountDown"

function BreathingRound(props) {

    const { round, breaths, hold, breathPace, silentHold} = props.roundData;

    const breathLength = breathPace == "slow" ? 6 
                         : breathPace == "quick" ? 2 
                         : 4;
                         
    const [stage, setStage] = useState('3count');
    const [count, setCount] = useState(0);
    const [isPaused, setIsPaused] = useState(false); 

    const endOfRound = () => {
        props.onEndOfRound();
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
        animationLastBreath: {
            scale: [1, 5],
            backgroundColor: [color1 , color2],
            transition: {
                duration: breathLength,
                easing: "easeInOut",
            }
        },
        animationHold: {
            scale: [5, 1],
            backgroundColor: [color2 , color1],
            transition: {
                duration: hold, 
                easing: "easeInOut",
            }
        },
        animation15Count: {
            scale: [1, 6, 1],
            backgroundColor: [color1 , color2],
            transition: { 
                duration: 15,
                times: [0, 0.05, 1],
                easing: "easeInOut", 
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
    }

    // RETURNS
    if (stage == '3count') {
        return (
            <CountDown time={3} onPaused={pauseRound} onComplete={() => setStage('breathing')} />
        )
    }

    if (stage !== '3count') {
        return (        

        <div className={styles.container}>
            <h1 className={styles.title}>Round: {round}</h1> 

            {/* THE ANIMATED BUBBLE */}
            <div className={styles.breathBubbleContainer}>
                <motion.div className={styles.breathBubble}
                variants={bubbleVariants}
                style={{scale:scaleOfBubble, backgroundColor:colorOfBubble}}
                animate={
                    isPaused ? "animationPaused" 
                    : stage == 'breathing' ? "animationOne"  
                    : stage == 'lastBreath' ? "animationLastBreath" 
                    : stage == 'breathhold' ? "animationHold"
                    : stage == '15count' ? "animation15Count" 
                    : "animationPaused"}
                >
                <p className={styles.counter}>
                    {stage == 'breathing' ? count 
                    : stage == 'breathhold' ? "Hold that breath" 
                    : stage == 'lastBreath' ? "Fully In!" 
                    : "Hold for 15 sec"}
                </p>
                </motion.div>
            </div>
            
            {/* BREATH TIMER */}
            <div className={styles.hidden}>
                <CountDown 
                    time={breaths*breathLength}
                    onEachBreath={() => setCount(count + 1)} 
                    onLastBreath={() => setStage('lastBreath')}
                    breathLength={breathLength} 
                    onComplete={() => setStage('breathhold')} 
                    onPaused={pauseRound} 
                />
            </div>

            {/* BREATHHOLD TIMER */}
            {stage == 'breathhold' && 
                <div className={styles.breathHoldContainer}>
                    <CountDown 
                        time={hold} 
                        onComplete={() =>  setStage('15count')} 
                        onPaused={pauseRound} 
                    />
                </div>}
            
            {/* 15 COUNT TIMER */}
            {stage == '15count' &&
                <CountDown 
                    time={15}
                    onComplete={endOfRound}
                    onPaused={pauseRound}
                />}

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