import styles from './DynamicForm.module.css'
import { useState } from "react";
import { motion } from 'framer-motion';

function BoxFormElement({ onChildChange, obj }) {

    console.log(obj)
    
    const [boxData, setBoxData] = useState({
        type: obj.type,
        cycles: obj.cycles,
        breathPace: obj.breathPace,
    })

    const inputChangeHandler = (event) => {
        let data = boxData;
        data[event.target.id] = event.target.value;
        setBoxData(data);
        onChildChange(boxData);
    }
    
    return ( 
        <>
            <div className={styles.breathsInputDiv}>
                <p className={styles.showValueField}>
                    cycles: {boxData.cycles}
                </p>
                <label htmlFor='cycles' />
                <input className={styles.slider}
                    type='range' 
                    id='cycles'
                    min='10'
                    max='100'
                    step='5'
                    defaultValue={boxData.cycles}
                    onChange={event => inputChangeHandler(event)}
                />
            </div>  

            <div className={styles.breathsInputDiv}>
                <p className={styles.showValueField}>
                    Pace: {boxData.breathPace} seconds
                </p>
                <label htmlFor='breathPace' />
                <input className={styles.slider}
                    type='range' 
                    id='breathPace'
                    min='2'
                    max='8'
                    defaultValue={boxData.breathPace}
                    onChange={event => inputChangeHandler(event)}
                />
            </div>  

            <motion.div 
                className={styles.box}
                animate={{
                    scale: boxData.breathPace
                }}
            />
        </>
     );
}

export default BoxFormElement;