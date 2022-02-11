import styles from '../styles/expIndex.module.css'
import Footer from "../components/Footer"
import BreathingSession from '../components/BreathingSession'

export default function Home() {

  return (    
    <>
      <div className={styles.sessionContainer}>
        <BreathingSession />
      </div>

      {/* <main className={styles.mainContent}>
        <h1>Description</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adip</p>
      </main>

      <Footer /> */}
    </>


  )
}
