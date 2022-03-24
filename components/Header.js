import styles from './Header.module.css';
import Link from 'next/link'
import { useRouter } from 'next/router'
import { auth } from '../firebase/clientApp';
import SignInButton from './SignInButton';
import { Context } from '../firebase/FavoritesContext'
import { useContext } from 'react'

function Header() {

    const context = useContext(Context);
    const { user, favArray } = context;
    const router = useRouter()


    const signOutHandler = () => {
        auth.signOut();
        router.push('/');
    }

    return ( 
        <div className={styles.header}>
            <div className={styles.infoDiv}>
                <Link href='/'>
                    <h1 className={styles.title}>
                        Time To Breathe
                    </h1>     
                </Link>
                <p className={styles.info}>In, out, in, out, in, out. Clear your mind<br/>
                Choose a session, or build your own</p>  
            </div>

            <div className={styles.buttonsDiv}>
                {!user && <SignInButton />}

                {user &&
                    <>
                        <Link href='/MyPage'>
                            <h1 className={styles.myPage}>
                                My Page
                            </h1>
                        </Link>
                            <div className={styles.favoriteSVG}>
                                <p className={styles.favoritesCount}>{favArray.length}</p>
                            </div>  

                        <button 
                            className={styles.signOutBtn}
                            onClick={signOutHandler}>
                            Sign Out
                        </button>
                    </>
                }
            </div>
        </div>
     );
}

export default Header;