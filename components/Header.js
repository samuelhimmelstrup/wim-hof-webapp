import styles from './Header.module.css';
import Link from 'next/link'
import { motion } from 'framer-motion';
import { auth } from '../firebase/clientApp';
import { useAuthState } from 'react-firebase-hooks/auth';
import SignInButton from './SignInButton';

function Header() {

    
    const [user] = useAuthState(auth);
    // console.log(user)

    return ( 
        <div className={styles.header}>
            <div className={styles.infoDiv}>
                <Link href='/'>
                    <h1 className={styles.title}>
                        Wim Hof Breathing app
                    </h1>     
                </Link>
                <p className={styles.info}>Do this and then that and then this again. <br/>
                If you press this then this will happen. Do it.</p>  
            </div>

            {!user && <SignInButton />}
            {user &&
                <div className={styles.signedInDiv}>
                    <Link href='/MyPage'>
                        <h1 className={styles.myPage}>
                            My Page
                        </h1>
                    </Link>
                    <button 
                        onClick={() => auth.signOut()}>
                        Sign Out
                    </button>
                </div>
            }

            
        </div>
     );
}

export default Header;