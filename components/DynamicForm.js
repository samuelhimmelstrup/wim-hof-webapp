import styles from "./DynamicForm.module.css"
import { useState } from "react";

function DynamicForm() {
    
    const [inputFields, setInputFields] = useState([
        {breaths: 30, hold: 60}
    ])

    const handleFormChange = (index, event) => {
        let data = [...inputFields];
        data[index][event.target.name] = event.target.value;
        setInputFields(data);
    }

    const addInputField = () => {
        if (inputFields.length < 5) {
            let newField = {breaths: 30, hold: 60};
            setInputFields([...inputFields, newField]);
            
        }
    }

    const removeInputField = () => {
            let newInputFields = inputFields.slice(0, inputFields.length-1)
            setInputFields(newInputFields);
            console.log(inputFields)
    }

    const submit = (event) => {
        event.preventDefault();
        console.log(inputFields)
    }

    return ( 
        <>
            <form>
                <div>
                    {inputFields.map ((obj, index) => {
                    return (
                        <div key={index} className={styles.formElement}>
                            <h2>Round: {index + 1}</h2>
                            
                            <label htmlFor="breaths">How many breaths?</label>
                            <input type="number" 
                            id="breaths" 
                            defaultValue={obj.breaths}
                            onChange={event => handleFormChange(index, event)}
                            />

                            <label htmlFor="holds">How long hold</label>
                            <input type="number"
                            id="holds"
                            defaultValue={obj.hold}
                            onChange={event => handleFormChange(index, event)}
                            />
                        </div>
                        )
                    })}
                </div>
                <button onClick={submit}>Submit</button>
            </form>

            <button onClick={addInputField} 
                    className={inputFields.length >= 5 ? styles.redBtn : styles.btn}>Add Round</button>            
            {inputFields.length > 1 && <button onClick={removeInputField}>Remove round</button>}
            
            
        </>
     );
}

export default DynamicForm;