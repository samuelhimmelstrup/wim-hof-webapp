import Questions from "./Questions"
import CustomSession from "./CustomSession"
import { useState } from "react"
import Layout from "../layout/Layout"

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
        <Layout>
                {!submitted && <Questions onSubmitForm={formHandler}/>}
                {submitted && <CustomSession sessionData={sessionData}/>}
        </Layout>        
     );
}

export default CustomForm;

