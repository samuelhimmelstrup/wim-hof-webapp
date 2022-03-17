import styles from './EndOfSession.module.css'
import { db } from '../firebase/clientApp'
import { doc, setDoc } from 'firebase/firestore'
import { Context } from '../firebase/FavoritesContext'
import { useContext } from 'react'
import SignInButton from './SignInButton'

function EndOfSession() {
    
    // USE QUILL https://quilljs.com/playground/

    const { user } = useContext(Context);

    const submitHandler = (e) => {
        e.preventDefault();

        let diaryEntry = {
            // Timestamp (from firebase??)
            // 
            // actual value
        }

        const diaryRef = (db, user.email, 'diaryEntries');
        console.log('yaaay yaaay')
    }
    
    return ( 
        <div className={styles.container}>
            <h1 className={styles.title}>
                Well Done Champ Champesen
            </h1>

            {!user &&
                <div className={styles.infoDiv}>
                    <SignInButton />
                    <h2 className={styles.signInPrompt}>Sign in to unlock cool features!</h2>
                    <p className={styles.lineOfInfo}>* Save your own custom sessions</p>
                    <p className={styles.lineOfInfo}>* Write down and save your thoughts <br />
                    after doing a session</p>
                </div>
            }

            {user &&
                <form 
                    className={styles.form}
                    onSubmit={submitHandler}>
                    <input 
                        type='textarea' 
                        placeholder="Write your thoughts here"
                    >

                    </input>
                    <button>Save to MyPage</button>
                </form>
            }
        </div>

     );
}



export default EndOfSession;