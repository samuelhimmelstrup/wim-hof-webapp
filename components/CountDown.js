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

    // Informs parent that a breath has been taken (to increment counter)
    useEffect(() => {
        if (seconds % breathLength == breathLength / 2) props.onEachBreath();
        if (seconds % breathLength == 0) props.onStartBreath();
        if (seconds == breathLength) props.onLastBreath();
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