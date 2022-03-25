import styles from './DynamicForm.module.css'
import { useState } from 'react';
import Backdrop from '../layout/Backdrop'
import SessionModal from './SessionModal';
import { defaultBoxRound, defaultWimHofRound } from '../api/fetchSessions';
import { motion } from 'framer-motion';

function DynamicForm( { onSubmit } ) {

    const maxNumberOfRounds = 5;
    const [modalOpen, setModalOpen] = useState(false);
    const [openPaceSelectors, setOpenPaceSelectors] = useState(false);

    const [inputFields, setInputFields] = useState([
        {
            type: 'Wim Hof',
            breaths: 30,
            breathPace: 'medium',
            hold: 90,
            silentHold: false
        }
    ])    

    // const inputChangeHandler = (childData, index) => {
    //     let data = [...inputFields];
    //     let clonedObject = Object.assign({}, childData)
    //     data.splice(index, 1, clonedObject);
    //     setInputFields(data);
    // }

    const inputChangeHandler = (index, event) => {
        let data = [...inputFields];
        data[index][event.target.id] = event.target.value;
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
            data.splice(index, 1);
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
                            <div key={index} className={styles.formElement}>
                                <div className={styles.typeOfRoundContainer}>
                                    <p className={styles.typeOfRound}>{obj.type}</p>
                                    <div  
                                        className={styles.toggleRoundTypeIcon}
                                        onClick={() => changeFormElementTypeHandler(index)}
                                    />
                                </div>

                                <div className={styles.roundNumberAndRemoveCopyContainer}>
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
                                    <>
                                        <div className={styles.breathsInputDiv}>
                                            <p className={styles.showValueField}>
                                                cycles: {inputFields[index].cycles}
                                            </p>
                                            <label htmlFor='cycles' />
                                            <input className={styles.slider}
                                                type='range' 
                                                id='cycles'
                                                min='10'
                                                max='100'
                                                step='5'
                                                value={inputFields[index].cycles}
                                                onChange={event => inputChangeHandler(index, event)}
                                            />
                                        </div>  

                                        <div className={styles.breathsInputDiv}>
                                            <p className={styles.showValueField}>
                                                Pace: {inputFields[index].breathPace} seconds
                                            </p>
                                            <label htmlFor='breathPace' />
                                            <input className={styles.slider}
                                                type='range' 
                                                id='breathPace'
                                                min='2'
                                                max='8'
                                                value={inputFields[index].breathPace}
                                                onChange={event => inputChangeHandler(index, event)}
                                            />
                                        </div>  

                                        <motion.div 
                                            className={styles.box}
                                            animate={{
                                                scale: inputFields[index].breathPace
                                            }}
                                        />
                                    </>
                                    }

                                    {obj.type == 'Wim Hof' && 
                                    <>
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
                                                value={inputFields[index].breaths}
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
                                                value={inputFields[index].hold}
                                                onChange={event => inputChangeHandler(index, event)}
                                            />
                                        </div>
                                        
                                        {/* BREATH PACE */}
                                        <p className={styles.paceText}>
                                            Pace: {inputFields[index].breathPace}
                                            <motion.button 
                                                initial={{ rotate:'0.25turn' }}
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
                                                {height: 40, display: 'flex', alignItems: 'center' } : 
                                                {height: 0, display: 'none'}}
                                            transition={{ duration: 0.5 }}
                                            id='breathPace' 
                                        >
                                            <label htmlFor='breathPace'>
                                                <input
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
                                                    onChange={(event) => silentHoldChangeHandler(event)}
                                                />Silent Breathhold?
                                            </label>  */}
                                    </>
                                    }
                                </div>
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