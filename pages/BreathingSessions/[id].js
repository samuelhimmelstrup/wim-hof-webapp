import styles from "../../styles/expIndex.module.css" // CHANGE STYLING
import { useState } from 'react'
import BreathingRound from '../../components/BreathingRound';

function SpecificSession(props) {

    const [roundNumber, setRoundNumber] = useState(1);

    const DUMMY_SESSION_DATA = [
      { 
        round: 1,
        breaths: 2,
        breathType: "slow", // ("slow", "normal") 
        hold: 5,
        silentHolds: false // TODO: implement silentHolds option (& sound in general)
      },
      { 
        round: 2,
        breaths: 6,
        breathType: "quick", // ("slow", "normal") 
        hold: 6,
        silentHolds: false // TODO: implement silentHolds option (& sound in general)
      },
      { 
        round: 3,
        breaths: 4,
        breathType: "slow", // ("slow", "normal") 
        hold: 5,
        silentHolds: false // TODO: implement silentHolds option (& sound in general)
      }
    ]
  
    const nextRoundHandler = () => {
      setRoundNumber(roundNumber + 1);
    }

    // returns all of the rounds in succesion
    return ( 
        <Wrapper>
            {DUMMY_SESSION_DATA.map(roundObj => {
          
          const { round } = roundObj;

          return (
              <div>
                    {roundNumber == round && <BreathingRound roundData={roundObj} onEndOfHold={nextRoundHandler}/>}
              </div> 
            )
            })}
        </Wrapper>
     );
}

export default SpecificSession;