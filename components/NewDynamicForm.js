import styles from "./DynamicForm.module.css"
import { useState } from "react";

function NewDynamicForm() {
    
    const [count, setCount] = useState(1);

    let roundsArr = [...Array(count).keys()]

    const submit = (event) => {
        event.preventDefault();
    }

    return ( 
        <>
            <button onClick={() => setCount(count + 1)}>+</button>
            <h1>{count}</h1>
            <button onClick={() => {
            if (count > 1) {
                setCount(count - 1)
            }}}
            >-</button>

            <form>
                <div>
                    {roundsArr.map ((obj, index) => {
                    return (
                        <div key={index} className={styles.formElement}>
                            <h2>Round: {index + 1}</h2>
                            
                            <label htmlFor="breaths">How many breaths?</label>
                            <input type="number" 
                            id="breaths" 
                            />

                            <label htmlFor="holds">How long hold</label>
                            <input type="number"
                            id="holds"
                            />
                        </div>
                        )
                    })}
                </div>
                <button onClick={submit}>Submit</button>
            </form>
            
            
        </>
     );
}

export default NewDynamicForm;