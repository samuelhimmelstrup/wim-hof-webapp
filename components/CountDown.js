import styles from "./CountDown.module.css"
import useCountdown from "@bradgarropy/use-countdown"
import { useCallback, useEffect } from "react";


function CountDown(props) {

    const { time, title, breathLength } = props; 

    const countdown = useCountdown({
        seconds: time,
        onCompleted: props.onComplete,
    })

    const { minutes, seconds, isRunning, pause, resume } = countdown
    
    const pauseHandler = useCallback(() => {
        if (isRunning) pause(); 
        if (!isRunning) resume();

        props.onPaused(); 
    })

    useEffect(() => {
        if (seconds % breathLength == 0) props.onEachBreath();
    }, [seconds])

    useEffect(() => {

        function handleKeyPress(e) {
          if (e.key === " ") {
            pauseHandler();
          }}

        window.addEventListener("keydown", handleKeyPress);
    
        return () => {
          window.removeEventListener("keydown", handleKeyPress);
        };
     }, [pause, resume])

    return ( 
        <div className={styles.countDownContainer}>
            <p>{title}</p>
            {minutes !== 0 ? `${minutes}:` : " "}{seconds}
            <button onClick={pauseHandler}>
                {isRunning ? "Pause" : "Resume"}
            </button>   
        </div>
     );
}

export default CountDown;