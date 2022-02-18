import styles from '../styles/expIndex.module.css'
import { useState } from 'react'
import BreathingRound from '../components/BreathingRound'
import DynamicForm from '../components/DynamicForm'
import NewDynamicForm from '../components/NewDynamicForm'

export default function Home() {

  const [roundNumber, setRoundNumber] = useState(1);

  const DUMMY_SESSION_DATA = [
    { 
      round: 1,
      breaths: 2,
      breathType: "quick", // ("slow", "normal") 
      hold: 5,
      silentHolds: false // TODO: implement silentHolds option (& sound in general)
    },
    { 
      round: 2,
      breaths: 2,
      breathType: "quick", // ("slow", "normal") 
      hold: 5,
      silentHolds: false // TODO: implement silentHolds option (& sound in general)
    },
    { 
      round: 3,
      breaths: 2,
      breathType: "quick", // ("slow", "normal") 
      hold: 5,
      silentHolds: false // TODO: implement silentHolds option (& sound in general)
    }
  ]

  const nextRoundHandler = () => {
    setRoundNumber(roundNumber + 1);
  }

  return (    
    <>
        {DUMMY_SESSION_DATA.map(roundObj => {
          const { round } = roundObj;
          return <div key={round} className={styles.sessionContainer}>
                    {roundNumber == round && 
                    <BreathingRound roundData={roundObj} 
                                    onEndOfHold={nextRoundHandler}/>}
                  </div>
        })}

      <div className={styles.sessionContainer}>
        <DynamicForm />
      </div>

      <NewDynamicForm />

    </>


  )
}
