import styles from '../styles/Home.module.css'
import { useState } from "react"
import SessionsBox from "../components/SessionsBox"
import Image from "next/image"
import Backdrop from "../layout/Backdrop"

export default function Home() {

  const [showSessions, setShowSessions] = useState(false);

  const showSessionsHandler = () => {
    if (showSessions) {
      setShowSessions(false)
    }
    else
      setShowSessions(true)
    }

  return (    
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <div className={styles.titleAndBtnBox}>
          <h1 className={styles.title}>Welcome my beautiful friend</h1>
          <button type="button" className={styles.btn} onClick={showSessionsHandler}>SESSIONS</button>
        </div>
        <div className={styles.nightsky}>
          <Image src="/../public/images/nightsky.jpg" layout="fill" priority="true" />
        </div>
        <div className={styles.clouds}>
          <Image src="/../public/images/clouds.png" layout="fill" />
        </div>
        { showSessions && <SessionsBox />}   
        { showSessions && <Backdrop onClicking={showSessionsHandler}/> } 
      </div>

      <main className={styles.mainContent}>
        <h1>Description</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adip</p>
      </main>

    </div>
  )
}
