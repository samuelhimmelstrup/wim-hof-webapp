import Questions from "./Questions"
import ReadyToBreathe from "./ReadyToBreathe"
import styles from "./CustomForm.module.css"
import { useState } from "react"

function CustomForm() {
    
    const [submitted, setSubmitted] = useState(false)
    
    async function formHandler (sessionData) {
        
        const response = await fetch("/api/submit-question", {
            method: "POST",
            body: JSON.stringify(sessionData),
            header: {
                "Content-Type": "application/json"
            }
        });
        const data = await response.json();
        setSubmitted(true);
    }

    return (
        <>
            <div className={submitted ? styles.hidden : styles.outerContainer}>
                <Questions onSubmitForm={formHandler}/> 
            </div>    
            <div className={submitted ? styles.link : styles.hidden}>
                <ReadyToBreathe />
            </div>
        </>
     );
}

export default CustomForm;

