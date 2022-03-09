import styles from './Header.module.css';
import Link from 'next/link'
import { motion } from 'framer-motion';
import { auth } from '../firebase/clientApp';
import { GoogleAuthProvider, signOut } from "firebase/auth";
import { signInWithPopup } from "firebase/auth";
import { useAuthState } from 'react-firebase-hooks/auth';



// brug den der firebase hook der returnerer "user"
// {user ? <button onClick={() => auth.signOut()}>Sign Out</button> : <button onClick={signInWithGoogle}>Sign In With Google</button>}

// LAV ET LOGO der kan klikke tilbage
// LAV LOGIN

function Header() {

    const [user] = useAuthState(auth);

    const signInWithGoogle = async () => {
        const provider = new GoogleAuthProvider();
        provider.addScope('profile');
        provider.addScope('email');
        const result = await signInWithPopup(auth, provider);
      }

    return ( 
        <div className={styles.header}>
            <div className={styles.infoDiv}>
                <h1 className={styles.title}><Link href='/'>Wim Hof Breathing App</Link></h1>     
                <p className={styles.info}>Do this and then that and then this again. <br/>
                If you press this then this will happen. Do it.</p>  
            </div>

            {!user && <button onClick={signInWithGoogle}>Sign In</button>}

            {user && <Link href='/MyPage'>MY PERSONAL PAGE</Link>}
            {user && <button onClick={() => auth.signOut()}>Sign Out</button>}
            
        </div>
     );
}

export default Header;