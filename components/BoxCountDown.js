import styles from "./BoxCountDown.module.css"
import useCountdown from "@bradgarropy/use-countdown"
import { useEffect, useState } from "react";

function BoxCountDown({ 
        time, 
        breathLength, 
        onPaused, 
        onInhale, 
        onExhale, 
        onBreak1, 
        onBreak2, 
        onComplete }) {

    const countdown = useCountdown({
        seconds: time,
        onCompleted: onComplete,
        format: "mm:ss:ss"
    })

    const { minutes, seconds, isRunning, pause, resume } = countdown;

    const pauseHandler = () => {
        if (isRunning) pause(); 
        if (!isRunning) resume();
        onPaused(); 
    }

    const [inhaleExhaleOrBreak, setInhaleExhaleOrBreak] = useState('break2');
    
    const inhaleExhaleOrBreakHandler = () => {

        if (inhaleExhaleOrBreak == 'inhale') {
            onBreak1();
            setInhaleExhaleOrBreak('break1');
        }
        else if (inhaleExhaleOrBreak == 'break1') {
            onExhale();
            setInhaleExhaleOrBreak('exhale');
        }
        else if (inhaleExhaleOrBreak == 'exhale') {
            onBreak2();
            setInhaleExhaleOrBreak('break2');
        }
        else if (inhaleExhaleOrBreak == 'break2') {
            onInhale();
            setInhaleExhaleOrBreak('inhale')
        }
    }

    useEffect(() => {
        if (seconds % breathLength == 0 && seconds !== 0) {
            inhaleExhaleOrBreakHandler();
        } 
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

export default BoxCountDown;