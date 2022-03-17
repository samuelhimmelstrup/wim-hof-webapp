import styles from "./ModalWrapper.module.css"

function ModalWrapper(props) {
    return ( 
        <div className={styles.modalWrapper}>
            {props.children}
        </div>
     );
}

export default ModalWrapper;