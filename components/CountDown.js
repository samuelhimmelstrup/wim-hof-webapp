import styles from "./CountDown.module.css"
import useCountdown from "@bradgarropy/use-countdown"
import { useCallback, useEffect } from "react";


function CountDown(props) {

    const { time, breathLength } = props; 

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

    // inhale, exhale, last inhale
    useEffect(() => {
        if (seconds % breathLength == breathLength / 2 && seconds > breathLength) props.onExhale();
        if (seconds % breathLength == 0 && seconds !== 0) props.onInhale();
        if (seconds == breathLength) props.onLastInhale();
    }, [seconds])

    // Handles space = pause
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
            <p className={styles.time}>
                {minutes !== 0 ? `${minutes}:${seconds}` 
                : minutes == 1 && seconds == 0 ? seconds
                : seconds}
            </p>
        </div>
     );
}

export default CountDown;