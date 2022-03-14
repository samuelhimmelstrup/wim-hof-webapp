import styles from '../styles/Home.module.css'
import { useState } from "react"
import Wrapper from '../layout/Wrapper'
import Sessions from '../components/Sessions';
import BreathingSession from '../components/BreathingSession';
import DynamicForm from '../components/DynamicForm';

export default function Home() {

  const [whatToShow, setWhatToShow] = useState('sessions');
  const [currentSession, setCurrentSession] = useState({});

  const showSessions = () => {
    if (whatToShow !== 'sessions') {
      setWhatToShow('sessions')
    }};

  const showForm = () => {
    if (whatToShow !== 'form') {
      setWhatToShow('form')
    }};

  const startSessionHandler = data => {
    setCurrentSession(data);
    setWhatToShow('breathing')
  }

  return (  
    <>
    

    <div className={styles.centerDiv}>
      <Wrapper>
        {whatToShow == 'sessions' && <Sessions onletsGoClick={data => startSessionHandler(data)}/>}
        {whatToShow == 'form' && <DynamicForm onSubmit={formData => startSessionHandler(formData)}/>} 
        {whatToShow == 'breathing' && <BreathingSession props={currentSession} />}

        <button 
          className={whatToShow == 'sessions' ? styles.formBtn : styles.hidden} 
          onClick={showForm}>
          Build your own
        </button>

        <button 
          className={whatToShow == 'form' ? styles.backBtn : styles.hidden} 
          onClick={showSessions}>
          Back
        </button>
      </Wrapper>
    </div>  

    </>
  )
}
