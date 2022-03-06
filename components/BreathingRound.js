import styles from './BreathingRound.module.css'
import { useState } from 'react'
import { motion, useMotionValue } from 'framer-motion'
import CountDown from './CountDown'
import useSound from 'use-sound'


function BreathingRound(props) {

    // VARIABLES
    const { round, breaths, hold, breathPace, silentHold, musicUrl } = props.roundData;
    const breathLength = 
        breathPace == 'slow' ? 6 : 
        breathPace == 'medium' ? 4 : 
        2;
    const inhaleUrl = 
        breathPace == 'slow' ? '/sounds/inhaleSlow.mp3' : 
        breathPace == 'medium' ? '/sounds/inhaleMedium.mp3' : 
        '/sounds/inhaleQuick.mp3';
    const exhaleUrl = 
        breathPace == 'slow' ? '/sounds/exhaleSlow.mp3' : 
        breathPace == 'medium' ? '/sounds/exhaleMedium.mp3' : 
        '/sounds/exhaleQuick.mp3';
    const [stage, setStage] = round == 1 ? useState('intro') : useState('3count');
    const [count, setCount] = useState(0);
    const [isPaused, setIsPaused] = useState(false); 

    const [playInhale] = useSound(inhaleUrl);
    const [playExhale] = useSound(exhaleUrl);
    
    const [playBeat, {pause, stop, duration, sound}] = useSound(musicUrl,{ volume: 0.2 }, {interrupt:true});

    const startRound = () => {
        playBeat();
        setStage('3count');
    }

    const inhaleHandler = () => { 
        playInhale();
    }

    const exhaleHandler = () => {
        playExhale();
        setCount(count + 1);
    }

    const lastInhaleHandler = () => {
        setStage('lastBreath');
        if (silentHold) sound.fade(0.2, 0, breathLength * 1000)
    }

    const pauseRound = () => {
        if (!isPaused) {
            setIsPaused(true);
            pause();
            // TODO: Find way to resume at current posish
            // sound.seek(currentTime)
        } 
        if (isPaused) {
            setIsPaused(false);
            playBeat();
        }
    }

    const endOfRoundHandler = () => {
        stop();
        props.onEndOfRound()
    }

    // ANIMATION STUFF
    const scaleOfBubble = useMotionValue(1);
    const colorOfBubble = useMotionValue('#982132');
    const color1 = '#a8e2ca';
    const color2 = '#58a685';
    const bubbleVariants = {
        animationOne: {
            scale: [1, 3],
            backgroundColor: [color1 , color2],
            transition: {
                duration: breathLength / 2,
                easing: 'easeInOut',
                repeat: breaths * 2,
                repeatType: 'reverse'
            }
        }, 
        animationLastInhale: {
            scale: [1, 5],
            backgroundColor: [color1 , color2],
            transition: {
                duration: breathLength,
                easing: 'easeInOut',
            }
        },
        animationHold: {
            scale: [5, 1],
            backgroundColor: [color2 , color1],
            transition: {
                duration: hold, 
                easing: 'easeInOut',
            }
        },
        animation15Count: {
            scale: [1, 5, 1],
            backgroundColor: [color1 , color2],
            transition: { 
                duration: 15,
                times: [0, 0.05, 1],
                easing: 'easeInOut', 
            }
        },
        animationPaused: {
            scale: [scaleOfBubble.get(), 1],
            backgroundColor: colorOfBubble.get(),
            transition: {
                duration: 0.8,
                easing: 'easeOut',
            }
        },
    }

    // RETURNS 
    if (stage == 'intro') {
        return (
        <div className={styles.container}>
            <h1 className={styles.title}>{!duration ? "Hold on, one sec .." : "Ready Eddie!"}</h1> 
            <p className={styles.lieDownText}>Lie down, sit down, whatever it takes - RELAX</p>
        
        {duration ?         
        
        <motion.button
            onClick={startRound}
            >
            I am ready to breathe
        </motion.button> 
        : 
        <motion.div className={styles.spinningLoader}>SPINNING LOADER</motion.div>
        } 
        

        </div>
        )
    }

    if (stage == '3count') {
        return (
            <div className={styles.container}>
                <h1 className={styles.title}>Prepare for round {round}</h1> 
                <CountDown 
                    time={3} 
                    onPaused={pauseRound} 
                    onComplete={() => setStage('breathing')} 
                />
                
                {isPaused && <div className={styles.pause}>PAUSED</div>}
            </div>
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
                    isPaused ? 'animationPaused' 
                    : stage == 'breathing' ? 'animationOne'  
                    : stage == 'lastBreath' ? 'animationLastInhale' 
                    : stage == 'breathhold' ? 'animationHold'
                    : stage == '15count' ? 'animation15Count' 
                    : 'animationPaused'}
                >
                <p className={styles.counter}>
                    {stage == 'breathing' ? count 
                    : stage == 'breathhold' ? 'Hold that breath'
                    : stage == 'lastBreath' ? 'Fully In!' 
                    : stage == '15count' ? 'Hold for 15 sec' : ''}
                </p>
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
                            onComplete={() => setStage('breathhold')} 
                            onPaused={pauseRound} 
                        />
                    </div>
                }   

                {/* BREATHHOLD TIMER */}
                {stage == 'breathhold' && 
                    <div className={styles.breathHoldContainer}>
                        <CountDown 
                            time={hold} 
                            onComplete={() => setStage('15count')} 
                            onPaused={pauseRound} 
                        />
                    </div>
                }
                
                {/* 15 COUNT TIMER */}
                {stage == '15count' &&
                    <CountDown 
                        time={15}
                        onComplete={endOfRoundHandler}
                        onPaused={pauseRound}
                    />
                }
            </div>

            {isPaused && <div className={styles.pause}>PAUSED</div>}

        </div>
        );
    }
}

export default BreathingRound;
