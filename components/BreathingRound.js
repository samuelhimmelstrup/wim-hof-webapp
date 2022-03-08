import styles from './BreathingRound.module.css'
import { useEffect, useState } from 'react'
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
    
    // STATES
    // TODO: Try setting to intro in all rounds, see if it affects sound
    const [stage, setStage] = 
        round == 1 ? useState('intro') : useState('3count');
    const [breathStage, setBreathStage] = useState('inhale');
    const [count, setCount] = useState(0);
    const [isPaused, setIsPaused] = useState(false); 

    // SOUNDS
    const [playInhale] = useSound(inhaleUrl);
    const [playExhale] = useSound(exhaleUrl);
    const [playBeat, { pause, stop, duration, sound }] = useSound(
        musicUrl,
        { volume: 0.2 }, 
        { interrupt:true },
        { html5: true }
        );

    // HELPER FUNCTIONS 

    useEffect(() => {
        if (round !== 1) playBeat();
    },[])

    const fadeSoundHandler = () => {
        sound.fade(0.2, 0, breathLength * 1000)
        sound.on('fade', () => stop())
    }

    const endOfIntroHandler = () => {
        playBeat();         
        setStage('3count');
    }

    // TODO: Remove console.log (after fixing sound)
    const endOfThreeCountHandler = () => {
        console.log(sound);
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

    const lastInhaleHandler = () => {
        setStage('lastBreath');
        if (silentHold) fadeSoundHandler();
    }

    const endOfBreathingHandler = () => {
        playExhale();
        setStage('breathhold');
    }

    const endOfHoldHandler = () => {
        playInhale();  
        setStage('15count')
    }

    const endOfRoundHandler = () => {
        playExhale();
        if (sound.playing()) fadeSoundHandler();
        props.onEndOfRound()
    }

    const pauseRoundHandler = () => {
        if (!isPaused) {
            setIsPaused(true);
            pause();
        } 
        if (isPaused) {
            setIsPaused(false);
            playBeat();
        }
    }

    // ANIMATION VARIABLES
    const scaleOfBubble = useMotionValue(1);
    const colorOfBubble = useMotionValue('#982132');
    const color1 = '#a8e2ca';
    const color2 = '#58a685';
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
            scale: [scaleOfBubble.get(), 5],
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
            scale: [scaleOfBubble.get(), 5, 1],
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
    if (stage == 'intro') {
        return (
            <div className={styles.container}>
                <h1 className={styles.title}>{!duration ? "Hold on, one sec .." : "Ready Eddie!"}</h1> 
                <p className={styles.introInfo}>Lie down, sit down, whatever it takes - RELAX</p>
                <p className={styles.introInfo}>Press spacebar to pause / resume at anytime</p>

                {duration ?         
                    <motion.button onClick={endOfIntroHandler}>I am ready to breathe</motion.button> 
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
                    onPaused={pauseRoundHandler} 
                    onComplete={endOfThreeCountHandler} 
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

        </div>
        );
    }
}

export default BreathingRound;
