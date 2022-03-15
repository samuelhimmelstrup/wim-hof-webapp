import styles from './DynamicForm.module.css'
import { useState } from 'react';
import Backdrop from '../layout/Backdrop'
import SessionModal from './SessionModal';
import { motion } from 'framer-motion';

function DynamicForm( { onSubmit } ) {
    
    const maxNumberOfRounds = 5;
    const [modalOpen, setModalOpen] = useState(false);
    const [openPaceSelectors, setOpenPaceSelectors] = useState(false);

    const [inputFields, setInputFields] = useState([
        { 
        breaths: 30,
        breathPace: 'medium',
        hold: 90,
        silentHold: false
        }
    ])

    const inputChangeHandler = (index, event) => {
        let data = [...inputFields];
        data[index][event.target.id] = event.target.value;
        setInputFields(data);
        console.log(data);
        console.log(data[index]);
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
            
            let copiedField = {
                breaths: inputFields[index].breaths,
                breathPace: inputFields[index].breathPace,
                hold: inputFields[index].hold,
                silentHold: inputFields[index].silentHold
            };            
            setInputFields([...inputFields, copiedField]);                   
        }
    }

    const removeInputField = (index) => {
        if (inputFields.length !== 1) {
            let data = [...inputFields];
            data.splice(index, 1);
            setInputFields(data);
        }
    }

    const submitHandler = (event) => {
        event.preventDefault();
        setModalOpen(true);
    }

    const letsGoHandler = () => {     
        let formData = {
            id: 100,
            title: 'Custom Session',
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
                    
                    {inputFields.map ((obj, index) => {
                        return (
                            <div key={index} className={styles.formElement}>
                                <h2>Round: {index + 1}</h2>

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
                                
                                {/* BREATHS */}
                                <div className={styles.breathsInputDiv}>
                                    <p className={styles.showValueField}>
                                        Breaths: {inputFields[index].breaths}
                                    </p>
                                    <label htmlFor='breaths' />
                                    <input className={styles.slider}
                                        type='range' 
                                        id='breaths'
                                        min='10'
                                        max='100'
                                        step='5'
                                        defaultValue={obj.breaths}
                                        onChange={event => inputChangeHandler(index, event)}
                                    />
                                </div>
                                
                                {/* BREATHHOLD */}
                                <div className={styles.holdInputDiv}>  
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
                                    <label htmlFor='hold' />
                                    <input className={styles.slider} 
                                        type='range'
                                        id='hold'
                                        min='30'
                                        max='180'
                                        step='10'
                                        defaultValue={obj.hold}
                                        onChange={event => inputChangeHandler(index, event)}
                                    />
                                </div>
                                
                                {/* BREATH PACE */}
                                <p>
                                    Breath Pace: {inputFields[index].breathPace}
                                    <motion.button 
                                        animate={openPaceSelectors ? 
                                            {rotate:'0.75turn'} : {rotate:'0.25turn'}}
                                        whileHover={{ scale: 1.1, transition: { duration: 0.4 } }}
                                        whileTap={{ scale: 0.95 }}
                                        type='button' 
                                        className={styles.openUpSelectorsBtn}
                                        onClick={() => setOpenPaceSelectors(!openPaceSelectors)} 
                                    />
                                </p> 

                                <motion.div 
                                    animate={openPaceSelectors ? 
                                            {height: 40, display: 'flex', alignItems: 'center'} : 
                                            {height: 0, display: 'none'}}
                                    transition={{ duration: 0.5 }}
                                    id='breathPace' 
                                    className=''
                                >
                                    <label htmlFor='breathPace'>
                                        <input
                                            name={'breathPaceSelector' + index}
                                            id='breathPace'
                                            type='radio'
                                            value='slow'
                                            checked={inputFields[index].breathPace == 'slow'}
                                            onChange={(event) => inputChangeHandler(index, event)}
                                        />
                                        Slow
                                    </label> 

                                    <label htmlFor='breathPace'>
                                        <input
                                            name={'breathPaceSelector' + index}
                                            id='breathPace'
                                            type='radio'
                                            value='medium'
                                            checked={inputFields[index].breathPace == 'medium'}
                                            onChange={(event) => inputChangeHandler(index, event)}
                                        />
                                        Medium
                                    </label> 

                                    <label htmlFor='breathPace'>
                                        <input
                                            name={'breathPaceSelector' + index}
                                            id='breathPace'
                                            type='radio'
                                            value='quick'
                                            checked={inputFields[index].breathPace == 'quick'}
                                            onChange={(event) => inputChangeHandler(index, event)}
                                        />
                                        Quick
                                    </label> 
                                </motion.div>  

                                    {/* <label htmlFor='silentHold'>
                                        <input
                                            name='silentHold'
                                            id='silentHold'
                                            type='checkbox'
                                            value='true'
                                            onChange={(event) => silentHoldChangeHandler(index, event)}
                                        />Silent Breathhold?
                                    </label>  */}
                                      
                            </div>
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