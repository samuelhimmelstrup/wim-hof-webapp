import styles from './DynamicForm.module.css'
import { useState } from 'react';
import Backdrop from '../layout/Backdrop'
import SessionModal from './SessionModal';
import { defaultBoxRound, defaultWimHofRound } from '../api/fetchSessions';
import BoxFormElement from './BoxFormElement';
import FormElement from '../layout/FormElement';
import WimHofFormElement from './WimHofFormElement';

function DynamicForm( { onSubmit } ) {
    
    const maxNumberOfRounds = 5;
    const [modalOpen, setModalOpen] = useState(false);

    const [inputFields, setInputFields] = useState([
        {
            type: 'Wim Hof',
            breaths: 30,
            breathPace: 'medium',
            hold: 90,
            silentHold: false
        }
    ])    

    const inputChangeHandler = (childData, index) => {
        let data = [...inputFields];
        let clonedObject = Object.assign({}, childData)
        data.splice(index, 1, clonedObject);
        setInputFields(data);
    }

    // const silentHoldChangeHandler = (index, event) => {
    //     let data = [...inputFields];

    //     if (event.target.checked) {
    //         data[index][event.target.id] = true;
    //     }
    //     if (!event.target.checked) {
    //         data[index][event.target.id] = false;
    //     }
    //     setInputFields(data);
    // }

    const addInputField = () => {
        if (inputFields.length < maxNumberOfRounds) {
            let newField = {
                type: 'Wim Hof',
                breaths: 30,
                breathPace: 'medium',
                hold: 90,
                silentHold: false
            };
            setInputFields([...inputFields, newField]);          
        }
    }

    const copyInputField = (index) => {
        if (inputFields.length < maxNumberOfRounds) {
            let data = [...inputFields];
            let newField = Object.assign({}, data[index])
            data.splice(index, 0, newField);
            setInputFields(data); 
        }
    }

    const removeInputField = (index) => {
        if (inputFields.length > 1) {
            let data = [...inputFields];
            data.splice(index - 1, 1);
            setInputFields(data);
            console.log(inputFields)
        }
        
    }

    const changeFormElementTypeHandler = (index) => {
        let data = [...inputFields];
        if (inputFields[index].type == 'Box') {
            data.splice(index, 1, defaultWimHofRound);
        }
        else {
            data.splice(index, 1, defaultBoxRound);
        }
        setInputFields(data);
    }

    const submitHandler = (event) => {
        event.preventDefault();
        setModalOpen(true);
    }

    const letsGoHandler = () => {    
        
        // TODO: Make general purpose
        let WimCheck = inputFields.some(obj => {
            obj.type == 'Wim Hof'
        })

        let BoxCheck = inputFields.some(obj => {
            obj.type == 'Box'
        })

        let sessionType = 
            WimCheck && BoxCheck ? 'Mixed' :
            WimCheck ? 'Wim Hof' : 'Box'

        //
        
        let formData = {
            id: 100,
            title: 'Custom Session',
            sessionType: sessionType,
            level: 'custom',
            musicUrl: '/sounds/ambient1.mp3',
            sessionData:            
            [...inputFields]
        }
        onSubmit(formData);
    }

    return ( 
        <div className={styles.container}>

            <form onSubmit={submitHandler}>
                <div className={styles.allInputsDiv}>     

                    {inputFields.map((obj, index) => {
                        
                        return ( 
                            <FormElement key={index}>
                                
                                <div className={styles.flexDiv}>
                                    <p className={styles.typeOfRound}>{obj.type}</p>
                                    <div  
                                        className={styles.toggleRoundTypeIcon}
                                        onClick={() => changeFormElementTypeHandler(index)}
                                    />
                                </div>

                                <div className={styles.flexColumnDiv}>
                                
                                    <h2 className={styles.roundNumber}>Round: {index + 1}</h2> 

                                    <div className={styles.removeAndCopyDiv}>
                                        <button 
                                            type='button'
                                            className={styles.removeBtn} 
                                            onClick={() => removeInputField(index)}>
                                        </button>

                                        <button 
                                            type='button'
                                            className={styles.copyBtn} 
                                            onClick={() => copyInputField(index)}>
                                        </button>    
                                    </div>
                                </div>  
                            
                                <div className={styles.roundSpecificDiv}>
                                    {obj.type == 'Box' && 
                                        <BoxFormElement 
                                            obj={obj}
                                            onChildChange={(boxData) => inputChangeHandler(boxData, index)} 
                                        />
                                    }

                                    {obj.type == 'Wim Hof' && 
                                        <WimHofFormElement
                                            obj={obj}
                                            onChildChange={(wimHofData) => inputChangeHandler(wimHofData, index)} 
                                        />
                                    }
                                </div>
                                      
                            </FormElement>
                            )}   
                        )
                        }
                </div>

                <button className={styles.submitBtn}>Lets Go</button>
            </form>

            <button 
                onClick={addInputField} 
                className={inputFields.length >= 5 ? styles.disabledBtn : styles.addBtn}>
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