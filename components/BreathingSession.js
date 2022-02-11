import styles from "./BreathingSession.module.css"
import { useState } from "react"
import dynamic from 'next/dynamic'
const Anime = dynamic(() => import('react-anime'), {ssr: false})

import { motion } from "framer-motion"


function BreathingSession(props) {

    const sessionData = {
        rounds: 3, 
        breaths: 4,
        holds: 30
    }

    const { rounds, breaths, holds } = sessionData

    let [count, setCount] = useState(0);

    return ( 
        <div className={styles.container}>
            <h1 className={styles.title}>HER ER DIN SESSION</h1> 

            {/* <div className={styles.breathBubbleContainer}>
 
                <Anime easing="easeInOutSine"
                duration={2000}
                direction="alternate"
                loop={breaths}
                scale={[1, 5]}
                complete={() => {setCount(count + 1)}}
                >
                    <div className={styles.breathBubble}>
                        <p className={styles.breathCount}>{count}</p>
                    </div>
                </Anime>
            </div> */}

            <motion.circle 
            animate={{ 
                scale: 5,
                backgroundColor: "black",
                width: "100%",
                boxShadow: "10px 10px 0 rgba(0, 0, 0, 0.2)", 
                }} 
            />

        </div>
     );
}

export default BreathingSession;


{/* <Anime easing="easeInOutSine"
duration={2000}
direction="alternate"
loop={breaths}
scale={[0.2, 1]}
rotate={100}
>
    <div className={styles.innerBubble} />
    {/* {breathCounter++} */}
// </Anime> */}


// LYDRELATERET
// import useSound from "use-sound"
// import breathSound from "../public/sighBreath.mp3"

// const [play] = useSound(breathSound);
// <button onClick={play}>play sound</button> 