import styles from './BoxBreathingRound.module.css'
import { useState } from 'react'
import { motion, useMotionValue } from 'framer-motion'
import BoxCountDown from './BoxCountDown'
import CountDown from './CountDown'
import useSound from 'use-sound'
import Layout from '../layout/Layout'

function BoxBreathingRound({
    roundData, 
    roundNumber, 
    onFadeMusic, 
    onPauseMusic, 
    onPlayMusic, 
    onEndOfRound}) {

    // VARIABLES
    const round = roundNumber;
    const { cycles, breathPace } = roundData;

    const inhaleUrl = '/sounds/inhaleSlow.mp3' 
    const exhaleUrl = '/sounds/exhaleSlow.mp3'
    
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
        setCount(count + 1);
    }

    const exhaleHandler = () => {
        setBreathStage('exhale');
        playExhale();
    }

    const break1Handler = () => {
        setBreathStage('break1');
    }

    const break2Handler = () => {
        setBreathStage('break2');
    }

    const endOfRoundHandler = () => { 
        onEndOfRound();  
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

    // Progress dot animation
    const xPosition = useMotionValue(0);
    const yPosition = useMotionValue(0);
    const progressVariants = {
        animationInhale: {
            x: [xPosition.get(), 250],
            y: yPosition.get(),
        }, 
        animationExhale: {
            x: [xPosition.get(), 0],
            y: yPosition.get(),
        }, 
        animationBreak1: {
            y: [yPosition.get(), 250],
            x: xPosition.get(),
        }, 
        animationBreak2: {
            y: [yPosition.get(), 0],
            x: xPosition.get(),
        }, 
        animationPaused: {
            x: xPosition.get(),
            y: yPosition.get(),
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

                {stage == 'breathing' &&
                <>
                    <h1 className={styles.title}>Round: {round}</h1> 

                    {/* THE ANIMATED BOX */}
                    <div className={styles.breathBoxContainer}>
                        <div className={styles.breathBox}>
                            {count}
                            <motion.div                    
                                className={styles.progressDot}
                                variants={progressVariants}
                                style={{ x: xPosition, y: yPosition }}
                                animate={
                                    isPaused ? 'animationPaused' 
                                    : breathStage == 'inhale' ? 'animationInhale'  
                                    : breathStage == 'exhale' ? 'animationExhale'  
                                    : breathStage == 'break1' ? 'animationBreak1'  
                                    : breathStage == 'break2' ? 'animationBreak2'  
                                    : 'animationPaused'}
                                transition={{ duration: breathPace }}
                            />
                        </div>
                    </div>
                    
                    <div className={styles.timerContainer}>
                        {/* BREATH TIMER */}
                        {(stage == 'breathing' || stage == 'lastBreath' ) &&
                            <div className={styles.hidden}>
                                <BoxCountDown 
                                    time={cycles * breathPace}
                                    onExhale={exhaleHandler}
                                    onInhale={inhaleHandler}
                                    onBreak1={break1Handler}
                                    onBreak2={break2Handler}
                                    breathLength={breathPace} 
                                    onComplete={endOfRoundHandler} 
                                    onPaused={pauseRoundHandler} 
                                />
                            </div>
                        }   
                    </div>
                </>
                }

                {isPaused &&
                    <div className={styles.pause}>PAUSED</div>
                }

                <div 
                    className={isPaused ? styles.playBtn : styles.pauseBtn}
                    onClick={pauseRoundHandler}
                />

            </div>        
        )
}

export default BoxBreathingRound;
