import styles from "./CountDown.module.css"
import useCountdown from "@bradgarropy/use-countdown"


function CountDown(props) {

    const { time, title, showMinutes } = props; 

    const countdown = useCountdown({
        seconds: time,
        onCompleted: props.onComplete,
    })

    const { minutes, seconds, isRunning, pause, resume } = countdown
    
    const pauseHandler = () => {
        if (isRunning) {
            pause();
            props.onPaused(); 
        }         
        if (!isRunning) {
            resume();
            props.onPaused(); 
        }
    }

    const handleKeyDown = (event) => {
        if (event.keyCode === 32 || event.keyCode === 13) {
            pauseHandler();
        }
    }
    // LORTET VIRKER IKK
    // TODO: implement spacebar == pause
    // https://thewebdev.info/2021/05/24/how-to-listen-for-key-press-for-document-in-react-js/

    return ( 
        <div className={styles.countDownContainer}>
            <p>{title}</p>
            {minutes !== 0 ? `minutes: ${minutes}:` : " "}{seconds}
            <button onKeyDown={handleKeyDown} onClick={pauseHandler}>
                {isRunning ? "Pause" : "Resume"}
            </button>   
        </div>
     );
}

export default CountDown;