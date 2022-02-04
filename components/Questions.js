import { useRef, useState } from "react"
import styles from "./Questions.module.css"

// rendered by CustomForm

function RoundsQuestion(props) {

    const [question, setQuestion] = useState(1);

    const roundsInputRef = useRef();
    const breathsInputRef = useRef();
    const holdsInputRef = useRef();
    const valueRef = useRef();

    function roundsClickHandler() {
        if (roundsInputRef.current.value >= 1 && roundsInputRef.current.value <= 5) {
            setQuestion(question + 1)
        }
    }

    function updateValueField() {
        valueRef.current.value = holdsInputRef.current.value;
    }

    function breathsClickHandler() {
        if (breathsInputRef.current.value >= 10 && breathsInputRef.current.value <= 50) {
            setQuestion(question + 1)
        }
    }

    function backHandler() {
        if (question > 1) {
            setQuestion(question - 1)
        }
    }
    
    function submitHandler(event) {
        event.preventDefault();
        const rounds = roundsInputRef.current.value;
        const breaths = breathsInputRef.current.value;
        const holds = holdsInputRef.current.value;
        
        const sessionData = {
            rounds: rounds, 
            breaths: [breaths],
            holds: [holds]
        }

        props.onSubmitForm(sessionData)
    }
    
    return (
        <div className={styles.formContainer}>
            <form onSubmit={submitHandler} className={styles.form}>
                <div className={question === 1 ? styles.questionContainer : styles.hidden}>
                    <label htmlFor="rounds">How many rounds would you like to do?</label>
                    <input type="number" required min="1" max="5" placeholder="1-5" className={styles.inputField} ref={roundsInputRef} />
                    <div className={styles.btnContainer}>
                        <button type="button" className={styles.btn} onClick={roundsClickHandler}>NEXT</button>
                    </div>
                </div>

                <div className={question === 2 ? styles.questionContainer : styles.hidden}>
                    <label htmlFor="breaths">How many breaths pr round?</label>
                    <input type="number" required id="breaths" placeholder="10-50" min="10" max="50" className={styles.inputField} ref={breathsInputRef}></input>
                    <div className={styles.btnContainer}>
                        <button onClick={backHandler} className={styles.btn}>BACK</button>
                        <button type="button" onClick={breathsClickHandler} className={styles.btn}>NEXT</button>
                    </div>
                </div>

                <div className={question === 3 ? styles.questionContainer : styles.hidden}>
                    <label htmlFor="breathholds">How long do you want the breathholds to be? (seconds)</label>
                    <input type="text" className={styles.valueField} ref={valueRef} defaultValue="90" />
                    <input type="range" required id="breathholds" min="30" max="150" defaultValue="90" onChange={updateValueField} className={styles.slider} ref={holdsInputRef} />
                        <div className={styles.btnContainer}>
                        <button onClick={backHandler} className={styles.btn}>BACK</button>
                        <button type="submit" className={styles.btn}>LETS GO</button>
                    </div>
                </div>
            </form>
        </div> 

     );
}

export default RoundsQuestion;
