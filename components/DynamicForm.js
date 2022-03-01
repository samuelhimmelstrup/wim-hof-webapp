import styles from './DynamicForm.module.css'
import { useState } from 'react';

function DynamicForm() {
    
    const [inputFields, setInputFields] = useState([
        { 
        round: 0,
        breaths: 30,
        breathPace: 'medium',
        hold: 90,
        silentHold: false
        }
    ])

    const handleFormChange = (index, event) => {
        let data = [...inputFields];
        data[index][event.target.name] = event.target.value;
        setInputFields(data);
    }

    const addInputField = () => {
        if (inputFields.length < 5) {
            let newField = {
                round: inputFields.length,
                breaths: 30,
                breathPace: 'medium',
                hold: 90,
                silentHold: false
            };
            setInputFields([...inputFields, newField]);
            
        }
    }

    // TODO: make this take index and remove specific field
    // HOW TO PASS INDEX OF TARGET??
    const removeInputField = () => {
            let newInputFields = inputFields.slice(0, inputFields.length - 1);
            setInputFields(newInputFields);
            console.log(inputFields);
    }

    // TODO: implement
    const copyInputField = () => {

    }

    const submitHandler = (event) => {
        event.preventDefault();
        console.log(inputFields)
    }

    return ( 
        <div className={styles.container}>
            <form onSubmit={submitHandler}>
                <div className={styles.allInputsDiv}>
                    {inputFields.map ((obj, index) => {
                    return (
                        <div key={index} className={styles.formElement}>
                            <h2>Round: {index + 1}</h2>
                            
                            <div className={styles.singleInputDiv}>
                                <label htmlFor="breaths">Breaths?</label>
                                <input type="range" 
                                id="breaths"
                                defaultValue={obj.breaths}
                                onChange={event => handleFormChange(index, event)}
                                />
                            </div>

                            <div className={styles.singleInputDiv}>
                                <label htmlFor="hold">Breathhold</label>
                                <input type="range"
                                id="hold"
                                defaultValue={obj.hold}
                                onChange={event => handleFormChange(index, event)}
                                />
                            </div>
                            
                            <label htmlFor="breathPace">Pace of breaths</label>
                            <div id="breathPace" className={styles.singleInputDiv}>
                            <label htmlFor="slow">
                                <input
                                type="radio"
                                value="slow"
                                // checked={state.selectedOption === "Male"}
                                // onChange={onValueChange}
                                />
                                Slow (6 sec)
                            </label> 

                            <label htmlFor="medium">
                                <input
                                type="radio"
                                value="medium"
                                // checked={state.selectedOption === "Male"}
                                // onChange={onValueChange}
                                />
                                Medium (4 sec)
                            </label> 

                            <label htmlFor="medium">
                                <input
                                type="radio"
                                value="quick"
                                // checked={state.selectedOption === "Male"}
                                // onChange={onValueChange}
                                />
                                Quick (2 sec)
                            </label> 
                            </div> 

                        <button className={styles.smallBtn} onClick={removeInputField}>X</button>
                        <button className={styles.smallBtn} onClick={copyInputField}>C</button>
                        </div>
                        )
                    })}
                </div>
                <button className={styles.submitBtn}>Lets go (submit)</button>
            </form>

            <button 
                onClick={addInputField} 
                className={inputFields.length >= 5 ? styles.redBtn : styles.addBtn}>
                Add Round
            </button>            
        </div>
     );
}

export default DynamicForm;