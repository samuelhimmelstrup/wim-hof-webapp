import styles from '../styles/MakeCSPage.module.css'
import CustomSession from "../components/CustomSession"
import Wrapper from "../layout/Wrapper"
import Questions from "../components/Questions"
import { useState } from "react"


export default function MakeCSPage() {

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
      <div className={styles.bg}>
        <Wrapper>
          {!submitted && <Questions onSubmitForm={formHandler}/>}
          {submitted && <CustomSession sessionData={sessionData}/>}
        </Wrapper>
      </div>
     );
}
