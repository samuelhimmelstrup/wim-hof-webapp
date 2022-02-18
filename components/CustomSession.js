import styles from "./CustomSession.module.css"
import Wrapper from "../layout/Wrapper"
import { useState } from "react"
import BreathingRound from "./BreathingRound"


function CustomSession({sessionData}) {

    const { rounds, breaths, holds } = sessionData
    const [isReady, setIsReady] = useState(false);


    return ( 
        <Wrapper>
            <div className={isReady ? styles.hidden : styles.infoContainer}>
                <h1>Are you ready?</h1>
                    <p>{rounds} round(s) <br/>
                    of {breaths} breaths 
                    <br/>with {holds} seconds breathhold in between</p>
                <button onClick={() => setIsReady(true)} className={styles.btn}>START MY SESSION</button>
            </div>

            { isReady && <BreathingRound data={sessionData}/> }

        </Wrapper>
    )
}

export default CustomSession

