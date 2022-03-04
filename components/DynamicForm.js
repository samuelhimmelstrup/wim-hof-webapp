import styles from './DynamicForm.module.css'
import { useState } from 'react';
import Backdrop from '../layout/Backdrop'
import SessionModal from './SessionModal';

function DynamicForm( { onSubmit } ) {
    
    const maxNumberOfRounds = 5;
    const [modalOpen, setModalOpen] = useState(false);

    const [inputFields, setInputFields] = useState([
        { 
        round: 1,
        breaths: 30,
        breathPace: 'medium',
        hold: 90,
        silentHold: false
        }
    ])

    const handleFormChange = (index, event) => {
        let data = [...inputFields];
        data[index][event.target.id] = event.target.value;
        setInputFields(data);
    }

    const addInputField = () => {
        if (inputFields.length < maxNumberOfRounds) {
            let newField = {
                round: inputFields.length + 1,
                breaths: 30,
                breathPace: 'medium',
                hold: 90,
                silentHold: false
            };
            setInputFields([...inputFields, newField]);          
        }
    }

    const removeInputField = (index) => {
        let data = [...inputFields]
        data.splice(index, 1)
        setInputFields(data);
    }

    // TODO: implement
    const copyInputField = (index) => {
        if (inputFields.length < maxNumberOfRounds) {
            let data = [...inputFields]
            let copy = data[index]
            data.splice(index, 0, copy)    
            setInputFields(data);
        }
    }

    const submitHandler = (event) => {
        event.preventDefault();
        setModalOpen(true);
    }

    const letsGoHandler = () => {
        onSubmit(inputFields);
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
                                    <p className={styles.showValueField}>
                                        Breaths: {inputFields[index].breaths}
                                    </p>
                                    <label htmlFor="breaths" />
                                    <input className={styles.slider}
                                        type="range" 
                                        id="breaths"
                                        min="10"
                                        max="100"
                                        step="5"
                                        defaultValue={obj.breaths}
                                        onChange={event => handleFormChange(index, event)}
                                    />
                                </div>
                                    
                                <div className={styles.singleInputDiv}>  
                                    {/* FORMATTING MINUTES/SECONDS STRING ACCORDING TO LENGTH OF HOLD */}
                                    <p className={styles.showValueField}>
                                        {inputFields[index].hold <= 60 ? 
                                            `Breathhold: ${inputFields[index].hold} sec`
                                        : inputFields[index].hold % 60 == 0 ? 
                                            `Breathhold: ${Math.floor(inputFields[index].hold / 60)} min`
                                        : 
                                            `Breathhold: ${Math.floor(inputFields[index].hold / 60)} : ${(inputFields[index].hold % 60)} min`
                                        }
                                    </p>
                                    <label htmlFor="hold" />
                                    <input className={styles.slider} 
                                        type="range"
                                        id="hold"
                                        min="30"
                                        max="180"
                                        step="10"
                                        defaultValue={obj.hold}
                                        onChange={event => handleFormChange(index, event)}
                                    />
                                </div>
                                
                                
                                <div id="breathPace" className={styles.singleInputDiv}>
                                    <p>Breath Pace</p>
                                    <label htmlFor="breathPace">
                                        <input
                                            name={"breathPaceSelector" + index}
                                            id="breathPace"
                                            type="radio"
                                            value="slow"
                                            onChange={(event) => handleFormChange(index, event)}
                                        />
                                        Slow (6 sec)
                                    </label> 

                                    <label htmlFor="breathPace">
                                        <input
                                            name={"breathPaceSelector" + index}
                                            id="breathPace"
                                            type="radio"
                                            value="medium"
                                            onChange={(event) => handleFormChange(index, event)}
                                        />
                                        Medium (4 sec)
                                    </label> 

                                    <label htmlFor="breathPace">
                                        <input
                                            name={"breathPaceSelector" + index}
                                            id="breathPace"
                                            type="radio"
                                            value="quick"
                                            onChange={(event) => handleFormChange(index, event)}
                                        />
                                        Quick (2 sec)
                                    </label> 

                                    <button 
                                        type='button'
                                        className={styles.smallBtn} 
                                        onClick={() => removeInputField(index)}>
                                        Remove
                                    </button>

                                    <button 
                                        type='button'
                                        className={styles.smallBtn} 
                                        onClick={() => copyInputField(index)}>
                                        Copy
                                    </button>
                                </div>  
                            </div>
                            )}   
                        )
                    }
                </div>

                <button className={styles.submitBtn}>LETS GO</button>
            </form>

            <button 
                onClick={addInputField} 
                className={inputFields.length >= 5 ? styles.redBtn : styles.addBtn}>
                Add Round
            </button>  

            {modalOpen && 
            <Backdrop onClick={() => setModalOpen(!modalOpen)}>
                <SessionModal 
                    data={inputFields}
                    onChildClick={letsGoHandler}
                    />
            </Backdrop>}          
        </div>
     );
}

export default DynamicForm;