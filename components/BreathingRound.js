import styles from './BreathingRound.module.css'
import { useState } from 'react'
import { motion, useMotionValue } from 'framer-motion'
import CountDown from './CountDown'
import useSound from 'use-sound'
import { BreathPaceValues } from '../api/fetchSessions'

// THIS COMP HANDLES BREATHING SOUNDS, BUT NOT MUSIC (HANDLED BY BreathingSession)

function BreathingRound({
    roundData, 
    roundNumber, 
    onFadeMusic, 
    onPauseMusic, 
    onPlayMusic, 
    onEndOfRound}) {

    // VARIABLES
    const round = roundNumber;
    const { breaths, hold, breathPace, silentHold } = roundData;
    const { slow, medium, quick } = BreathPaceValues;

    const breathLength = 
        breathPace == 'slow' ? slow : 
        breathPace == 'medium' ? medium : 
        quick;
    const inhaleUrl = 
        breathPace == 'slow' ? '/sounds/inhaleSlow.mp3' : 
        breathPace == 'medium' ? '/sounds/inhaleMedium.mp3' : 
        '/sounds/inhaleQuick.mp3';
    const exhaleUrl = 
        breathPace == 'slow' ? '/sounds/exhaleSlow.mp3' : 
        breathPace == 'medium' ? '/sounds/exhaleMedium.mp3' : 
        '/sounds/exhaleQuick.mp3';
    
    // STATES
    const [stage, setStage] = useState('3count')
    const [breathStage, setBreathStage] = useState('inhale');
    const [count, setCount] = useState(0);
    const [isPaused, setIsPaused] = useState(false); 

    // SOUNDS
    const [playInhale] = useSound(inhaleUrl, { volume: 0.5 });
    const [playExhale] = useSound(exhaleUrl, { volume: 0.5 });

    // HELPER FUNCTIONS 

    const endOfThreeCountHandler = () => {
        setStage('breathing');
    }

    const inhaleHandler = () => { 
        setBreathStage('inhale');
        playInhale();
    }

    const exhaleHandler = () => {
        setBreathStage('exhale');
        playExhale();
        setCount(count + 1);
    }

    // lets BreathingSession know whether or not to fade music out with duration: breathLength:
    const lastInhaleHandler = () => {
        setStage('lastBreath');
        if (silentHold) onFadeMusic(breathLength);
    }

    const endOfBreathingHandler = () => {
        playExhale();
        setStage('breathhold');
    }

    const endOfHoldHandler = () => {
        playInhale();  
        setStage('15count')
    }

    // lets BreathingSession know whether or not to restart music (after silentHold) 
    const endOfRoundHandler = () => {
        playExhale();
        onEndOfRound(silentHold, breathLength)
    }

    const pauseRoundHandler = () => {
        if (!isPaused) {
            setIsPaused(true);
            onPauseMusic();
        } 
        if (isPaused) {
            setIsPaused(false);
            onPlayMusic();
        }
    }

    // ANIMATION VARIABLES
    const scaleOfBubble = useMotionValue(1);
    const colorOfBubble = useMotionValue('#2BB1F5');
    const color1 = '#2BB1F5';
    const color2 = '#0025C7';
    const bubbleVariants = {
        animationInhale: {
            scale: [scaleOfBubble.get(), 3],
            backgroundColor: [colorOfBubble.get(), color2],
            transition: {
                duration: breathLength / 2,
                easing: 'easeInOut',
            }
        }, 
        animationExhale: {
            scale: [scaleOfBubble.get(), 1],
            backgroundColor: [colorOfBubble.get(), color1],
            transition: {
                duration: breathLength / 2,
                easing: 'easeInOut',
            }
        }, 
        animationLastInhale: {
            scale: [scaleOfBubble.get(), 3.5],
            backgroundColor: [color1 , color2],
            transition: {
                duration: breathLength,
                easing: 'easeInOut',
            }
        },
        animationHold: {
            scale: [scaleOfBubble.get(), 1],
            backgroundColor: [color2 , color1],
            transition: {
                duration: hold, 
                easing: 'easeInOut',
            }
        },
        animation15Count: {
            scale: [scaleOfBubble.get(), 3.5, 1],
            backgroundColor: [color1 , color2],
            transition: { 
                duration: 15,
                times: [0, 0.05, 1],
                easing: 'easeInOut', 
            }
        },
        animationPaused: {
            scale: scaleOfBubble.get(),
            backgroundColor: colorOfBubble.get()
        },
    }

    // RETURNS 

    return (  
        <div className={styles.container}>  

            {stage == '3count' && 
                <>
                    <h1 className={styles.title}>Prepare for round {round}</h1> 
                    <CountDown 
                        time={3} 
                        onPaused={pauseRoundHandler} 
                        onComplete={endOfThreeCountHandler} 
                    />
                    
                    {isPaused && <div className={styles.pause}>PAUSED</div>}
                </>
            }

            {stage !== '3count' &&
                <>
                <h1 className={styles.title}>Round: {round}</h1> 

                {/* THE ANIMATED BUBBLE */}
                <div className={styles.breathBubbleContainer}>
                    <motion.div 
                        className={styles.breathBubble}
                        variants={bubbleVariants}
                        style={{ scale:scaleOfBubble, backgroundColor:colorOfBubble }}
                        initial={{ backgroundColor: color1 }}
                        animate={
                            isPaused ? 'animationPaused' 
                            : stage == 'breathing' && breathStage == 'inhale' ? 'animationInhale'  
                            : stage == 'breathing' && breathStage == 'exhale' ? 'animationExhale'  
                            : stage == 'lastBreath' ? 'animationLastInhale' 
                            : stage == 'breathhold' ? 'animationHold'
                            : stage == '15count' ? 'animation15Count' 
                            : 'animationPaused'}
                        >
                        <motion.p 
                            className={styles.counter}
                            initial={{ color: color1 }}                            
                        >
                            {stage == 'breathing' ? `Breaths: ${count}` 
                            : stage == 'breathhold' ? 'Hold that breath'
                            : stage == 'lastBreath' ? 'Fully In!' 
                            : stage == '15count' ? 'Hold for 15 sec' : ''}
                        </motion.p>
                    </motion.div>
                </div>
                
                <div className={styles.timerContainer}>
                    {/* BREATH TIMER */}
                    {(stage == 'breathing' || stage == 'lastBreath' ) &&
                        <div className={styles.hidden}>
                            <CountDown 
                                time={breaths*breathLength}
                                onExhale={exhaleHandler}
                                onInhale={inhaleHandler}
                                onLastInhale={lastInhaleHandler}
                                breathLength={breathLength} 
                                onComplete={endOfBreathingHandler} 
                                onPaused={pauseRoundHandler} 
                            />
                        </div>
                    }   

                    {/* BREATHHOLD TIMER */}
                    {stage == 'breathhold' && 
                        <div className={styles.breathHoldContainer}>
                            <CountDown 
                                time={hold} 
                                onComplete={endOfHoldHandler} 
                                onPaused={pauseRoundHandler} 
                            />
                        </div>
                    }
                    
                    {/* 15 COUNT TIMER */}
                    {stage == '15count' &&
                        <CountDown 
                            time={2}
                            onComplete={endOfRoundHandler}
                            onPaused={pauseRoundHandler}
                        />
                    }
                </div>

                {isPaused && <div className={styles.pause}>PAUSED</div>}

                <div 
                    className={isPaused ? styles.playBtn : styles.pauseBtn}
                    onClick={pauseRoundHandler}
                />
                </>         
            }     
        </div>
    );
}

export default BreathingRound;
