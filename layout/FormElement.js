import styles from "./FormElement.module.css"

function FormElement(props) {
    return ( 
        <div className={styles.formElement}>
            {props.children}
        </div>
     );
}

export default FormElement;