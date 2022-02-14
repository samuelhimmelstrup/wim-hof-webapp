import styles from "./CountDown.module.css"
import useCountdown from "@bradgarropy/use-countdown"


function CountDown(props) {

    const { time } = props;


    const countdown = useCountdown({
        seconds: time,
        onCompleted: props.onComplete,
        isRunning: props.isRunning
    })

    const { minutes, seconds, isRunning, pause, resume } = countdown
    
    return ( 
        <div className={styles.countDownContainer}>
            minutes: {minutes}
            seconds: {seconds}
            <button onClick={isRunning ? pause : resume}>
                {isRunning ? "Pause" : "Resume"}
            </button>
            
        </div>
     );
}

export default CountDown;