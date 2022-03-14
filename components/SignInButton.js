import styles from './SignInButton.module.css'
import { SignInWithGoogle } from '../firebase/SignInWithGoogle';

function SignInButton() {

    return ( 
        <button 
            className={styles.signInBtn}
            onClick={SignInWithGoogle}
        >
            Sign In
        </button>
     );
}

export default SignInButton;