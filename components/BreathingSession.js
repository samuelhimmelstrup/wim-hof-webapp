import styles from './BreathingSession.module.css'
import { useState, useEffect } from 'react'
import BreathingRound from './BreathingRound'
import useSound from 'use-sound'
import { motion } from 'framer-motion'
import Layout from '../layout/Layout'
import EndOfSession from './EndOfSession'
import BoxBreathingRound from './BoxBreathingRound'

// THIS COMP HANDLES RENDERING OF ROUNDS & PLAYING MUSIC

function BreathingSession({ data }) {

  const { sessionData, musicUrl } = data
  const [roundNumber, setRoundNumber] = useState(0);
  const [musicVolume, setMusicVolume] = useState(0.7);
  
  const [playMusic, { pause, stop, duration, sound }] = useSound(
    musicUrl,
    { volume: musicVolume, loop: true, html5: true },
    { interrupt: true },
    );

  // stop music on unMount
  useEffect(() => {
    console.log("mounted")
    return () => {
      console.log(pauseMusicHandler())
      console.log("unmounted")
    }
  }, [])

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

  // RETURNS
  return (
    <Layout>

    {/* INTRO */}
    {roundNumber == 0 &&
      <>
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
            <motion.div 
              className={styles.spinningLoader}
              animate={{ rotate: '360deg' }}
              transition={{ duration: 0.1, repeat: Infinity }}
            />
        } 
      </>
    }

    {/* BREATHING ROUNDS */}
    {roundNumber !== 0 &&
      <>  
        {sessionData.map((roundObj, index) => {
          return (
            <div key={index} className={styles.roundContainer}>

              {roundNumber == index + 1 && roundObj.type == 'Box' &&
                <BoxBreathingRound 
                  key={index}
                  roundNumber={roundNumber}
                  roundData={roundObj} 
                  onFadeMusic={fadeMusicHandler}
                  onPauseMusic={pauseMusicHandler}
                  onPlayMusic={playMusicHandler}
                  onEndOfRound={nextRoundHandler}
                />
              }

              {roundNumber == index + 1 && roundObj.type == 'Wim Hof' &&
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
          }
        )
        }

        {/* END OF SESSION */}
        {roundNumber == (sessionData.length + 1) &&             
          <EndOfSession />    
        }
      </>
    }
    </Layout>
  )
}

export default BreathingSession;