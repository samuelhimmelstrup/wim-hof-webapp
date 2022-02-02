import Questions from "./Questions"
import CustomSession from "./CustomSession"
import styles from "./CustomForm.module.css"
import { useState } from "react"

function CustomForm() {
    
    const [submitted, setSubmitted] = useState(false)
    const [sessionData, setSessionData] = useState([])
    
    async function formHandler (sessionData) {
        
        // const response = await fetch("/api/submit-question", {
        //     method: "POST",
        //     body: JSON.stringify(sessionData),
        //     header: {
        //         "Content-Type": "application/json"
        //     }
        // });
        // const data = await response.json();

        setSessionData(sessionData)
        setSubmitted(true);
    }

    return (
        <>
            <div className={submitted ? styles.hidden : styles.outerContainer}>
                <Questions onSubmitForm={formHandler}/> 
            </div>    
            <div className={submitted ? styles.link : styles.hidden}>
                <CustomSession sessionData={sessionData}/>
            </div>
        </>
     );
}

export default CustomForm;

