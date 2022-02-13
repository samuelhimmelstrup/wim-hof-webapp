import styles from "./CountDown.module.css"
import useCountdown from "@bradgarropy/use-countdown"


function CountDown(props) {

    const { time } = props;

    const countdown = useCountdown({
        seconds: time,
        onCompleted: props.onComplete,
    })
    
    return ( 
        <div className={styles.countDownContainer}>
            minutes: {countdown.minutes}
            seconds: {countdown.seconds}
        </div>
     );
}

export default CountDown;