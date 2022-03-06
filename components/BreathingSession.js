import styles from './BreathingSession.module.css'
import { useState } from 'react'
import BreathingRound from './BreathingRound'

function BreathingSession({props}) {

  // Checks if props is 'array from DynamicForm' or 'object from Sessions'
  const sessionData = Array.isArray(props) ? props : props.sessionData;

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
              <BreathingRound 
                roundData={roundObj} 
                onEndOfRound={nextRoundHandler}
              />
              }
          </div>
          )
        })
      }
    </div>
  )
}

export default BreathingSession