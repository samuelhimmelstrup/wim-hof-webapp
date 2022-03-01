import styles from './BreathingSession.module.css'
import { useState } from 'react'
import BreathingRound from './BreathingRound'

function BreathingSession({props}) {

  const { sessionData, title, noOfRounds } = props;
  const [roundNumber, setRoundNumber] = useState(1);

  const nextRoundHandler = () => {
    setRoundNumber(roundNumber + 1);
  }

  return (
    <div className={styles.sessionContainer}>
      {sessionData.map(roundObj => {
        const { round } = roundObj;
        return (
          <div key={round} className={styles.roundContainer}>
              {roundNumber == round && 
              <BreathingRound roundData={roundObj} 
                              onEndOfRound={nextRoundHandler}/>}
          </div>
          )
      })}
    </div>
  )
}

export default BreathingSession