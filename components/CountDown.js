import styles from "./CountDown.module.css"
import useCountdown from "@bradgarropy/use-countdown"
import { useEffect } from "react";


function CountDown({ time, breathLength, onPaused, onInhale, onExhale, onLastInhale, onComplete }) {

    const countdown = useCountdown({
        seconds: time,
        onCompleted: onComplete,
    })


    const { minutes, seconds, isRunning, pause, resume } = countdown;
    
    const pauseHandler = () => {
        if (isRunning) pause(); 
        if (!isRunning) resume();
        onPaused(); 
    } 

    // inhale, exhale, last inhale
    useEffect(() => {
        if (seconds % breathLength == breathLength / 2 && seconds > breathLength) onExhale();
        if (seconds % breathLength == 0 && seconds !== 0) onInhale();
        if (seconds == breathLength) onLastInhale();
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
                : minutes !== 0 && seconds < 10 ? `${minutes}:0${seconds}`
                : minutes == 1 && seconds == 0 ? seconds
                : seconds}
            </p>
        </div>
     );
}

export default CountDown;