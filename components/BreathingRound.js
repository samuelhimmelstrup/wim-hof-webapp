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
    onEndOfRound
    }) {

    // VARIABLES
    const round = roundNumber;
    const { breaths, hold, breathPace, silentHold } = roundData;
    const { slow, medium, quick } = BreathPaceValues;
    const breathLength = 
        breathPace == 'slow' ? slow : 
        breathPace == 'medium' ? medium : 
        quick;

    // STATES
    // 3count, breathing, last breath, breathhold, 15count 
    const [stage, setStage] = useState('3count')
    
    // inhale, exhale
    const [breathStage, setBreathStage] = useState('inhale');
    const [count, setCount] = useState(0);
    const [isPaused, setIsPaused] = useState(false); 
    
    const inhaleExhaleIDs = breathPace == 'slow' ? { inhale: 'inhaleSlow', exhale: 'exhaleSlow' }
    : breathPace == 'medium' ? { inhale: 'inhaleMedium', exhale: 'exhaleMedium' } 
    : { inhale: 'inhaleQuick', exhale: 'exhaleQuick' } 

    // Breath sounds
    const [playBreath, { pause }] = useSound('/sounds/BreathQuickMediumSlow.mp3', {
        sprite: {        
        inhaleQuick: [0, 1000],
        exhaleQuick: [1000, 1000],
        inhaleMedium: [2000, 2000],
        exhaleMedium: [4000, 2000],
        inhaleSlow: [6000, 3000],
        exhaleSlow: [9000, 3000]}
        })
    
    // HELPER FUNCTIONS 

    const endOfThreeCountHandler = () => {
        setStage('breathing');
    }

    const inhaleHandler = () => { 
        setBreathStage('inhale');
        playBreath({ id: inhaleExhaleIDs.inhale }); 
    }

    const exhaleHandler = () => {
        setBreathStage('exhale');
        playBreath({ id: inhaleExhaleIDs.exhale });
        setCount(count + 1);
    }

    // lets BreathingSession know whether or not to fade music out with duration: breathLength:
    const lastInhaleHandler = () => {
        setBreathStage('inhale');
        setStage('lastBreath');
        if (silentHold) onFadeMusic(breathLength);
    }

    const endOfBreathingHandler = () => {
        setBreathStage('exhale');
        playBreath({ id: 'exhaleMedium' });
        setStage('breathhold');
    }

    const endOfHoldHandler = () => {
        setBreathStage('inhale');
        playBreath({ id: 'inhaleMedium' }); 
        setStage('15count')
    }

    // lets BreathingSession know whether or not to restart music (after silentHold) 
    const endOfRoundHandler = () => {
        playBreath({ id: 'exhaleMedium' }); 
        onEndOfRound(silentHold, breathLength)
    }

    const pauseRoundHandler = () => {
        if (!isPaused) {
            setIsPaused(true);
            onPauseMusic();
            pause();
        } 
        if (isPaused) {
            setIsPaused(false);
            onPlayMusic();
            if (breathStage == 'inhale') playBreath({ id: inhaleExhaleIDs.inhale });
            else if (breathStage == 'exhale') playBreath({ id: inhaleExhaleIDs.exhale });
        }
    }

    // ANIMATION VARIABLES
    const scaleOfBubble = useMotionValue(1);
    const colorOfBubble = useMotionValue('#2BB1F5');
    const color1 = '#2BB1F5';
    const bubbleVariants = {
        animationInhale: {
            scale: [scaleOfBubble.get(), 3],
            transition: {
                duration: breathLength / 2,
                easing: 'easeInOut',
            }
        }, 
        animationExhale: {
            scale: [scaleOfBubble.get(), 1],
            transition: {
                duration: breathLength / 2,
                easing: 'easeInOut',
            }
        }, 
        animationLastInhale: {
            scale: [scaleOfBubble.get(), 3.5],
            transition: {
                duration: breathLength,
                easing: 'easeInOut',
            }
        },
        animationHold: {
            scale: [scaleOfBubble.get(), 1],
            transition: {
                duration: hold, 
                easing: 'easeInOut',
            }
        },
        animation15Count: {
            scale: [scaleOfBubble.get(), 3.5, 1],
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

            <h1 className={styles.title}>Round: {round}</h1> 

            {stage == '3count' && 
                <>
                    {/* <div className={styles.breathBubbleContainer}>
                        <motion.div 
                            className={styles.breathBubble}
                            initial={{ backgroundColor: color1, scale: 1 }}
                            >
                            <motion.p 
                                className={styles.counter}
                                initial={{ color: 'white', fontWeight: 'bold' }}                            
                            >Prepare for next round</motion.p>
                        </motion.div>
                    </div> */}
                    <CountDown 
                        time={3} 
                        onPaused={pauseRoundHandler} 
                        onComplete={endOfThreeCountHandler} 
                    />
                    
                    {isPaused && <div className={styles.pause}>PAUSED</div>}
                    
                    <div 
                        className={isPaused ? styles.playBtn : styles.pauseBtn}
                        onClick={pauseRoundHandler}
                    />
                </>
            }

            {stage !== '3count' &&
                <>

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
                            initial={{ color: 'white', fontWeight: 'bold' }}                            
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
                            time={5}
                            onComplete={endOfRoundHandler}
                            onPaused={pauseRoundHandler}
                        />
                    }
                </div>

                {isPaused && 
                    <div className={styles.pause}>PAUSED</div>
                }

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
