import styles from './SessionsBox.module.css'
import Layout from '../layout/Layout'
import SessionItem from './SessionItem'
import Link from "next/link"
import Router from 'next/router'

function SessionsBox(props) {
    
    // Det skal selvfølgelig være en (dynamisk) side der spiller session
    const chooseSessionHandler = () => {
        Router.push("/MakeCSPage")
    }

    return ( 
        <Layout>
            <div className={styles.itemContainer}>
                <SessionItem onChooseSession={chooseSessionHandler} title="Session 1"/>
                <SessionItem title="Session 2"/>
                <SessionItem title="Session 3"/>
                <SessionItem title="Session 4"/>
            </div>
            
            <div className={styles.btnContainer}>
                <Link href="/MakeCSPage">
                    <button className={styles.btn}>Make your own</button>
                </Link>
                    <button className={styles.btnClose} onClick={props.onClicking}>Close</button>
            </div>

        </Layout>
     );
}

export default SessionsBox;