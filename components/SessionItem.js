import styles from './SessionItem.module.css';

function SessionItem(props) {
    // const { title, rounds, breaths, holds } = props
    
    let counter = 0; 

    const DUMMY_SESSION = {
        rounds: 3,
        breaths: [30, 40, 50],
        holds: [60, 90, 120]
    }
    const { rounds, breaths, holds } = DUMMY_SESSION
    
    return ( 
        <div className={styles.itemWrapper}>
            <h1 className={styles.title}>{props.title}</h1>
            <p>Description</p>
            {breaths.map(_ => {
            
            counter++ 

            return <p className={styles.allInfo}>
                <span className={styles.rounds}>Round {counter}: </span><br/>
                <span className={styles.breaths}>{breaths[-1 + counter]} breaths</span><br/>
                <span className={styles.holds}>{holds[-1 + counter]} seconds breathhold</span>
                </p> 
                })
            }
        </div>
     );
}

export default SessionItem;