import styles from "./ItemWrapper.module.css"

function ItemWrapper(props) {
    return ( 
    <div className={styles.itemWrapper}>
        {props.children}
    </div> );
}

export default ItemWrapper;