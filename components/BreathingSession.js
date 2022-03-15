import styles from './BreathingSession.module.css'
import { useState } from 'react'
import BreathingRound from './BreathingRound'
import useSound from 'use-sound'
import { motion } from 'framer-motion'

// THIS COMP HANDLES RENDERING OF ROUNDS & PLAYING MUSIC

function BreathingSession({props}) {

  const sessionData = props.sessionData;
  const musicUrl = props.musicUrl;
  const [roundNumber, setRoundNumber] = useState(0);
  const [musicVolume, setMusicVolume] = useState(0.7);
  
  const [playMusic, { pause, stop, duration, sound }] = useSound(
    musicUrl,
    { volume: musicVolume, loop: true },
    { interrupt: true }
    );

  const fadeMusicHandler = (breathLength) => {
    sound.fade(musicVolume, 0, breathLength * 1000)
  }

  const pauseMusicHandler = () => {
    pause();
  }

  const playMusicHandler = () => {
    playMusic();
  }  

  const startSessionHandler = () => {
    playMusic();
    setRoundNumber(roundNumber + 1);
  }

  const nextRoundHandler = (silentHold) => {
    if (roundNumber !== 0 && silentHold) {
      sound.fade(0, musicVolume, 2000)
    };
    setRoundNumber(roundNumber + 1);
  }

  if (roundNumber == 0) {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>{!duration ? "Hold on, one sec .." : "Ready Eddie!"}</h1> 
            <p className={styles.introInfo}>Lie down, sit down, whatever it takes - RELAX</p>
            <p className={styles.introInfo}>Press spacebar to pause / resume at anytime</p>

            {duration ?         
                <motion.button 
                  className={styles.readyBtn}
                  onClick={startSessionHandler}
                >
                  I am ready to breathe
                </motion.button> 
                : 
                <motion.div className={styles.spinningLoader}>SPINNING LOADER</motion.div>
            } 

        </div> 
    )
  }

  if (roundNumber != 0) {
    return (
      <div className={styles.sessionContainer}>
      
        {sessionData.map((roundObj, index) => {

          return (
            <div key={index} className={styles.roundContainer}>
                {roundNumber == index + 1 && 
                <BreathingRound 
                  roundNumber={roundNumber}
                  roundData={roundObj} 
                  onFadeMusic={fadeMusicHandler}
                  onPauseMusic={pauseMusicHandler}
                  onPlayMusic={playMusicHandler}
                  onEndOfRound={nextRoundHandler}
                />
                }
            </div>
            )
          })
        }

        {roundNumber == (sessionData.length + 1) && 
            <div>
              <h1>Well Done Champ Champesen</h1>
              <p></p>
            </div>
        }
      </div>
    )
  }
}

export default BreathingSession;