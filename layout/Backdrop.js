import styles from "./Backdrop.module.css";

function Backdrop(props) {
    return ( 
    <div className={styles.backdrop} onClick={props.onClicking}>
        <p className={styles.infoOne}>Click anywhere to close</p>
        <p className={styles.infoTwo}>Hold mouse over sessions to see more</p>
    </div>
);
}

export default Backdrop;