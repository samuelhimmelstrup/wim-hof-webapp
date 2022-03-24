import styles from './DynamicForm.module.css'
import { useEffect, useState } from "react";
import { motion } from 'framer-motion';

function WimHofFormElement({ onChildChange, obj }) {

    const [openPaceSelectors, setOpenPaceSelectors] = useState(false);

    const [wimHofData, setWimHofData] = useState(
    {
        type: obj.type,
        breaths: obj.breaths,
        breathPace: obj.breathPace,
        hold: obj.hold,
        silentHold: obj.silentHold
    }
    )

    const inputChangeHandler = (event) => {
        let data = wimHofData;
        data[event.target.id] = event.target.value;
        setWimHofData(data);
        onChildChange(wimHofData)
    }
    
    return ( 
        <>
             {/* BREATHS */}
             <div className={styles.breathsInputDiv}>
                <p className={styles.showValueField}>
                    Breaths: {wimHofData.breaths}
                </p>
                <label htmlFor='breaths' />
                <input className={styles.slider}
                    type='range' 
                    id='breaths'
                    min='10'
                    max='100'
                    step='5'
                    defaultValue={wimHofData.breaths}
                    onChange={event => inputChangeHandler(event)}
                />
            </div>
            
            {/* BREATHHOLD */}
            <div className={styles.holdInputDiv}>  
                {/* FORMATTING MINUTES/SECONDS STRING ACCORDING TO LENGTH OF HOLD */}
                <p className={styles.showValueField}>
                    {wimHofData.hold <= 60 ? 
                        `Breathhold: ${wimHofData.hold} sec`
                    : wimHofData.hold % 60 == 0 ? 
                        `Breathhold: ${Math.floor(wimHofData.hold / 60)} min`
                    : 
                        `Breathhold: ${Math.floor(wimHofData.hold / 60)} : ${(wimHofData.hold % 60)} min`
                    }
                </p>
                <label htmlFor='hold' />
                <input className={styles.slider} 
                    type='range'
                    id='hold'
                    min='30'
                    max='180'
                    step='10'
                    defaultValue={wimHofData.hold}
                    onChange={event => inputChangeHandler(event)}
                />
            </div>
            
            {/* BREATH PACE */}
            <p className={styles.paceText}>
                Pace: {wimHofData.breathPace}
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
                        checked={wimHofData.breathPace == 'slow'}
                        onChange={(event) => inputChangeHandler(event)}
                    />
                    Slow
                </label> 

                <label htmlFor='breathPace'>
                    <input
                        id='breathPace'
                        type='radio'
                        value='medium'
                        checked={wimHofData.breathPace == 'medium'}
                        onChange={(event) => inputChangeHandler(event)}
                    />
                    Medium
                </label> 

                <label htmlFor='breathPace'>
                    <input
                        id='breathPace'
                        type='radio'
                        value='quick'
                        checked={wimHofData.breathPace == 'quick'}
                        onChange={(event) => inputChangeHandler(event)}
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
     );
}

export default WimHofFormElement;