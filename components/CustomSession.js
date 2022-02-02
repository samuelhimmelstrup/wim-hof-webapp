import styles from "./CustomSession.module.css"
import Layout from "../layout/Layout"
import { useState } from "react"
import useSound from "use-sound"
import breathSound from "../public/sighBreath.mp3"

function CustomSession({sessionData}) {

    const { rounds, breaths, holds } = sessionData
    const [isReady, setIsReady] = useState(false);
    
    const [play] = useSound(breathSound);
    

    return ( 
        <Layout>
            <div className={isReady ? styles.hidden : styles.infoContainer}>
                <h1>Are you ready?</h1>
                <section className={styles.infoBox}>
                    <p>{rounds} round(s) of {breaths} breaths with {holds} seconds breathhold in between</p>
                </section>
                <button onClick={() => setIsReady(true)}>START MY SESSION</button>
            </div>

            <div className={isReady ? styles.sessionContainer : styles.hidden}>
                HER ER DIN SESSION BRATTA
                <button onClick={play}>play sound</button>
            </div>
        </Layout>
    )
}

export default CustomSession

