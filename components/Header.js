import styles from './Header.module.css'
import { motion } from 'framer-motion';
// import { GoogleAuthProvider } from "firebase/auth";
// import { signInWithPopup } from "firebase/auth";


// const signInWithGoogle = async () => {
//   const provider = new GoogleAuthProvider();
//   provider.addScope('profile');
//   provider.addScope('email');
//   const result = await signInWithPopup(auth, provider);
// }

// brug den der firebase hook der returnerer "user"
// {user ? <button onClick={() => auth.signOut()}>Sign Out</button> : <button onClick={signInWithGoogle}>Sign In With Google</button>}

// LAV ET LOGO der kan klikke tilbage
// LAV LOGIN

function Header() {
    return ( 
        <div className={styles.header}>
            <h1 className={styles.title}>Wim Hof Breathing App</h1>     
            <p className={styles.info}>Do this and then that and then this again. <br/>
            If you press this then this will happen. Do it.</p>  
        </div>
     );
}

export default Header;